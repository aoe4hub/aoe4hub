cd C:/aoe4hub

npm run-script build

$msg = 'Upload to server? (y)'

$response = Read-Host -Prompt $msg
if ($response -eq 'y') {
	# Upload built files
	scp -r -P 22 -i ~/.ssh/oraclegodesk.key C:/aoe4hub/build/* ubuntu@132.226.211.94:/var/www/html

	# Set perms
	#ssh -p 19022 -i ~/.ssh/id_godesk godesk@88.80.188.132 chgrp -R www-data /var/www/testdemo.getgodesk.com/*
	#ssh -p 19022 -i ~/.ssh/id_godesk godesk@88.80.188.132 chmod -R u+rwX,g+rX,g-w,o-rwx /var/www/testdemo.getgodesk.com/*

	pause
}
