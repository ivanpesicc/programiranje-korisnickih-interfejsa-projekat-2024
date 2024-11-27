# Programiranje Korisnickih Interfejsa

Ovaj repozitorijum poseduje izvorni kod
aplikacije obradjene kao projekat iz predmeta
Programiranje Korisnickih Interfejsa na smeru
Racunarske nauke, Fakulteta za Informatiku i
Racunarstvo Univerziteta Singidunum

## Tehnologije

Aplikacija je razvijana upotrebom frontend
okruzenja Angular 18. Pored toga koriscene su
sledece biblioteke:

- [Angular](https://angular.dev/)
- [Bootstrap](https://getbootstrap.com/)

## Struktura aplikacije

Izvorni kod koristi standardnu
strukture Angular projekta bez `app.modules.ts`
datoteke koja nije potrebno upravo od verzije
18. Svi potrebni moduli se uvoze direktno u
komponentama koje ih upotrebljavaju.