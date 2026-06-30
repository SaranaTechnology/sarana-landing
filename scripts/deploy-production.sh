#!/bin/bash
set -e

# Configuration
AWS_REGION="ap-southeast-1"
AWS_ACCOUNT_ID="481534398414"
ECR_REGISTRY="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
ECR_REPO="fe-sarana-public"
VERSION=${1:-$(date +%Y%m%d%H%M%S)}

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Resolve project root (script lives in <root>/scripts)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "${SCRIPT_DIR}")"

echo -e "${RED}=========================================="
echo "  SARANA LANDING — PRODUCTION DEPLOY"
echo "  Repo: ${ECR_REPO}"
echo "  Version: ${VERSION}"
echo -e "==========================================${NC}"

# Login to ECR
echo -e "${BLUE}[1/3] Logging in to ECR...${NC}"
aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}

# Create ECR repository if not exists
echo -e "${BLUE}[2/3] Checking ECR repository...${NC}"
aws ecr describe-repositories --repository-names ${ECR_REPO} --region ${AWS_REGION} >/dev/null 2>&1 || \
    aws ecr create-repository --repository-name ${ECR_REPO} --region ${AWS_REGION} --image-scanning-configuration scanOnPush=true

# Build and push
echo -e "${BLUE}[3/3] Building image (linux/amd64)...${NC}"
docker build \
    --platform linux/amd64 \
    -t ${ECR_REGISTRY}/${ECR_REPO}:${VERSION} \
    -t ${ECR_REGISTRY}/${ECR_REPO}:production-latest \
    "${ROOT_DIR}"

echo "Pushing images to ECR..."
docker push ${ECR_REGISTRY}/${ECR_REPO}:${VERSION}
docker push ${ECR_REGISTRY}/${ECR_REPO}:production-latest

echo ""
echo -e "${GREEN}=========================================="
echo "  Build & push complete!"
echo "==========================================${NC}"
echo ""
echo "Image:"
echo "  ${ECR_REGISTRY}/${ECR_REPO}:${VERSION}"
echo "  ${ECR_REGISTRY}/${ECR_REPO}:production-latest"
echo ""
echo "Deploy di server (via SSH):"
echo "  aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}"
echo "  docker pull ${ECR_REGISTRY}/${ECR_REPO}:production-latest"
echo "  docker compose up -d <service-landing>   # atau: docker run -d -p 3000:3000 <image>"
echo ""
