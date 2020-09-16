#!/bin/bash
#This script will email us our user, IP, hostname and today's date.
emailaddress=hammoncr@mail.uc.edu
today=$( date +"%d-%m-%Y")
a=$(ip a |grep 'dynamic ens 192' | awk '{print$2}')
content="User $USER From $a on $today with hostname $HOSTNAME"
mail -s "IT 3038C Linux IP" $emailaddress <<< $(echo -e $content)
