Write-Host "This script will give you the status of all the services on your machine"
Write-Host "The status of your running services is:"
Get-CimInstance -ClassName Win32_Service | Format-Table -Property Status,Name,DisplayName -AutoSize -Wrap
