

nQCI := 0;
nQCI := !CdAdmRtnQtdContratosAtivos(C696 C697);
aCIRel := 0;

!LOG("LOG 1 nQCI: %d aCIRel: %d" nQCI aCIRel -1);

For(nI:=0; nI < nQCI; nI:= nI+1){
    aCIRel := C704=0 ? !CdAdmGetDadoContrato(C696 C698 698) : "";

!LOG("LOG 2 nQCI: %d aCIRel: %d CI: %698d" nQCI aCIRel -1);

aSaida:= aCIRel;

!LOG("LOG 3 aSaida: %d %698d" aSaida -1);
}

aSaida;

!LOG("LOG 4 aSaida: %d" aSaida -1);

nQCI := 0;
nQCI := !CdAdmRtnQtdContratosAtivos(C696 C697);
aCIRel := 0;
aSaida := 0;

!LOG("LOG 1 nQCI: %d aCIRel: %d Resc: %704d imv: %697d" nQCI aCIRel -1);

for(nI:=0; nI < nQCI; nI := nI+1){
    se(C704=0){
!LOG("LOG 2 ok" -1);
        aCIRel :=!CdAdmGetDadoContrato(C696 C698 698);

}

!LOG("LOG 2 nQCI: %d aCIRel: %d CI: %698d" nQCI aCIRel -1);

aSaida:= aCIRel;

!LOG("LOG 3 aSaida: %d %698d aCIRel" aSaida aCIRel -1);
}

aSaida;

!LOG("LOG 4 aSaida: %d" aSaida -1);