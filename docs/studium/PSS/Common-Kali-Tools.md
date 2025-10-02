---
created:
  - "{{date: DD-MM-YYYY}} {{time}}"
aliases:
  - "Course Code:"
  - PSS-Portswigger-Academy
tags:
  - Course/
---
## Nmap(Portscan)

```c
sudo nmap -sV -p- -oA juiceshopfulltcp -v3 192.168.249.14
``` 
## Gobuster(Endpunkte anzeigen)

```c
gobuster dir -u http://192.168.249.14:3000/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt --exclude-length 75055 
```

