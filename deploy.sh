npm run build
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
sudo chmod -R 755 /var/www/html
echo "🚀 Deployment Successful!"
