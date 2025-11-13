# Stop any existing Node processes
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force

# Wait a moment
Start-Sleep -Seconds 2

# Start the server
Write-Host "Starting Next.js development server..." -ForegroundColor Green
Write-Host "Server will be available at: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host ""

npm run dev

