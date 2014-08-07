@echo off

set CURDIR=%cd%

call FlashSecuritySetup.bat

cd VMM_GamePackage\LoadBanlance
start LoadBalance.exe

cd %CURDIR%
cd VMM_GamePackage\VMM
start VMM_Andriod.exe

echo "start CXO.exe"
c:
cd Program Files\CXO
start CXO.exe




