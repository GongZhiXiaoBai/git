@echo off
for /l %%d in (1,1,42) do copy .\index1.html .\index%%d.html 

echo "结束!"
pause