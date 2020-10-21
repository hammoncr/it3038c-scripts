# Project 2

To run this program, make sure that Python3 is installed and working. You can validate this by running in your command prompt on Windows or Linux:

```bash
python --version
```

If using Linux, you may need to specify Python3
```bash
python3 --version
```

Now, from the it3038c-scripts directory, run the program using Python

```bash
python portcheck.py
```
This will check if port 80 on espn.com is an open port. But who wants to know that besides me?
More than likely you would like to check ports on another site.
To do so
Open the portcheck.py file in an editer of your choice, I prefer VSC
Change the variable "ip" to an ip address or the hostname of the site to check
Then change the variable "port" to the port number you would like to check.

Then save and run the script again and it will test and let you know if the port is open or closed.
