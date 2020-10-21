### LAB 7 
Here is how to run windows defender in powershell

Start by opening powershell as an administrator
Then run this command
```powershell
Install-Module -Name WindowsDefender
```
Type y when needed to finish the install of the module
After the install is done you have the ability to change windows defender settings from within powershell easily.
Lets start by running a quick scan of the machine

```powershell
Start-MpScan -AsJob
```
You can run the command without the -AsJob parameter and it will run in the foreground, adding the parameter runs the job in the background which is good
for tasks that take a while to complete.

Next you can run a command to view the most recent threats found by defender. (note, it will only display text if there have been threats previously)
```powershell
Get-MpThreat
```
If it returns to the cmd line with nothing to show then your machine has not detected any threats.
Next we can update the virus definitions and signatures file to keep our machine up to date on protections.
```powershell
Update-MpSignature
```

These are three easy commands to allow you to use windows defender from within powershell.
