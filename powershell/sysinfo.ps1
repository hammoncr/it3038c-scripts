function getIP{ (Get-NetIPAddress).ipv4address | Select-string "192*"}
write-host(getIP)
$IP = getIP
Write-Host("This machine's IP is $IP")
Write-Host("This machien's IP is {0}" -f $IP)
$User = whoami
$CompName = hostname
$Time = Get-Date
$BODY = "This machine's IP is ($IP). User is ($User). Hostname is ($CompName). Today's date is ($Time)."
Send-MailMessage -To "hammoncr@mail.uc.edu" -From "hammocl@gmail.com" -Subject "IT3038C Windows SysInfo" -Body $BODY -SmtpServer smtp.gmail.com -Port 587 -UseSSL -Credential (Get-Credential)