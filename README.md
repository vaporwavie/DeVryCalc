# Aviso

Esse repositório não segue as atualizações mais recentes do DeVryCalc, hoje feito em React Native. Caso queira utilizar o app em Ionic, realize o fork **deste** repositório. Caso queira a versão mais recente, veja em https://github.com/RodolfoSilva/DeVryCalc :)

Existirá outro fork referente à nova versão em breve.

# DeVry Calc

[![GitHub issues](https://img.shields.io/github/issues/vaporwavie/DeVryCalc.svg)](https://github.com/vaporwavie/DeVryCalc/issues)
[![GitHub stars](https://img.shields.io/github/stars/RodolfoSilva/DeVryCalc.svg)](https://github.com/vaporwavie/DeVryCalc/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/RodolfoSilva/DeVryCalc.svg)](https://github.com/vaporwavie/DeVryCalc/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vaporwavie/DeVryCalc/master/LICENSE)
[![Build Status](https://travis-ci.org/vaporwavie/DeVryCalc.svg?branch=master)](https://travis-ci.org/vaporwavie/DeVryCalc)

Calculadora de notas para alunos da DeVry.

[<img src="https://play.google.com/intl/en_us/badges/images/generic/pt-br_badge_web_generic.png" alt="Disponível no Google Play" height="100">](https://play.google.com/store/apps/details?id=com.rodolfosilva.devrycalc) 

# Configurando o Ambiente

* Clone este repositório
* Na pasta do repositório (que foi clonada), instale o Cordova e o Ionic:
  <code>npm install -g cordova</code> para o Cordova
  <code>npm install -g ionic</code> para o Ionic
* Instale os pacotes do npm com o comando <code>npm install</code> 

# Rodando o DeVry Calc

* Para reproduzir o app localmente, digite <code>ionic serve</code>

# Compilando (WIP)
Para compilar a aplicação, é necessário definir qual plataforma será  direcionada. Temos duas opções: Android e iOS. Os dois possuem comandos semelhantes.

### Adicionando a plataforma
* Para Android: <code>ionic platform add android</code>
* Para iOS <code>ionic platform add ios</code>

### Compilando a build
* Para Android: <code>ionic build android --release</code>
* Para iOS: <code>ionic build ios --release</code>

### Gerando o .apk 
* Execute: <code>ionic run android --device</code>
Você encontrará o apk em: <pre>platforms/android/build/output/*.apk</pre>

