# Project 2

To run this program, make sure that Python3 is installed and working. You can validate this by running in your command prompt on Windows or Linux:

```bash
python --version
```

If using Linux, you may need to specify Python3
```bash
python3 --version
```

Now, from the directory you saved the script to, run the program using Python

```bash
python portcheck.py
```
The point of this program is to check if a specified port is open at a specified address.
This can be useful for testing email server setups or ssh ports for a remote server, or any infinite number of reasons to check networks for open ports.

The program will start by asking you to input an ip address or a website address, it can take either. 
It will then ask you for a port number to check the status of.
Once you input those two things, it will reach out and check the status and return that status to you.
