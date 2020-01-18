#!/bin/bash
nohup serve -s dist -l tcp://localhost:8443 --ssl-cert private/https-jj1pow-com-003.crt --ssl-key private/https-jj1pow-com-003.key &

