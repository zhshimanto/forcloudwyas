#!/bin/bash

# Install dependencies
npm install --production

# Set environment variables
export NODE_ENV=production
export PORT=3000

# Start the Next.js application
npm start
