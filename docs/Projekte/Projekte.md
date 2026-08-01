---
title: Projekte
description: Ausgewählte Projekte von mir aus Studium, Praxissemester und persönlicher Entwicklung.
hide:
  - toc
---

<div class="projects-intro">
  <p class="projects-kicker"></p>
  <h1>Projekte</h1>
  <p>
    Eine Auswahl meiner Arbeiten aus Studium, Praxissemester und Freizeit.
    Nicht jedes Projekt ist ein fertiges Produkt - entscheidend ist, welches
    technische Problem dahinterstand, wie wir es gelöst haben und was ich daraus
    mitgenommen habe.
  </p>
</div>

<div class="project-catalog">

<article id="redfox-mythic-agent" class="project-detail project-detail--featured">
  <div class="project-detail__topline">
    <span>IT Security · Praxissemester</span>
    <span class="project-status">Praxisprojekt</span>
  </div>
  <h2>Redfox Mythic Agent</h2>
  <p class="project-detail__lead">
    Ein eigener Agent samt Payload für das C2-Framework Mythic, entwickelt während
    meines Praxissemesters bei Redfox Infosec in einer autorisierten Testumgebung.
  </p>
  <p>
    Der Agent orientiert sich am Beacon-Prinzip bekannter C2-Systeme: Er meldet sich
    kontrolliert beim Server, nimmt neue Aufgaben entgegen und liefert Ergebnisse
    zurück. Dadurch habe ich mich praktisch mit Agent-Architektur, Payload-Aufbau,
    C2-Kommunikation und der Integration in ein bestehendes Framework beschäftigt.
  </p>
  <div class="project-tags"><span>Mythic</span><span>C2</span><span>Agent Development</span><span>Beaconing</span></div>
  <p class="project-github">Der Quellcode ist aus vertraglichen Gründen nicht öffentlich verfügbar.</p>
</article>

<article id="no-mercy-gaming" class="project-detail project-detail--featured">
  <div class="project-detail__topline">
    <span>Server Infrastructure · Persönliches Projekt</span>
    <span class="project-status project-status--active">Aktive Entwicklung</span>
  </div>
  <h2>No Mercy Gaming</h2>
  <p class="project-detail__lead">
    Eine selbst aufgebaute Gaming-Plattform, bei der Minecraft-Server, Website,
    Datenbank und eigene Plugins als verteilte Komponenten zusammenspielen.
  </p>
  <p>
    Das Projekt umfasst deutlich mehr als die Konfiguration eines Spielservers:
    Ich betreibe die zugrunde liegende Linux-Serverinfrastruktur, den Minecraft-
    Server, die Webanwendung und die gemeinsam genutzte Datenbank. Die einzelnen
    Dienste greifen dabei über getrennte Datenbanknutzer und klar abgegrenzte
    Berechtigungen auf die jeweils benötigten Daten zu.
  </p>
  <p>
    Über ein selbst entwickeltes Verifizierungssystem können Spieler ihren
    Minecraft-Account mit einem Profil auf der Website verbinden. Ein eigenes
    Plugin erzeugt dafür im Spiel einen zeitlich begrenzten Code, der auf der
    Website bestätigt und anschließend dem richtigen Account zugeordnet wird.
    Weitere eigene Plugins verbinden Spielmechaniken, Nutzerstatistiken,
    Berechtigungen und Webprofile miteinander. Dadurch konnte ich praktische
    Erfahrung mit serviceübergreifender Kommunikation, Datenkonsistenz,
    Schnittstellendesign sowie dem sicheren Betrieb mehrerer voneinander
    abhängiger Komponenten sammeln.
  </p>
  <div class="project-tags"><span>Java</span><span>Paper</span><span>Linux</span><span>Webentwicklung</span><span>SQL</span><span>Eigene Plugins</span><span>Verteilte Systeme</span></div>
  <a class="project-github" href="https://no-mercy-gaming.com" target="_blank" rel="noopener">Zur Homepage -></a>
</article>

<article id="codebreaker" class="project-detail project-detail--featured">
  <div class="project-detail__topline">
    <span>Software Engineering · Hochschulprojekt</span>
    <span class="project-status project-status--honest">Prototyp / nicht abgeschlossen</span>
  </div>
  <h2>Codebreaker</h2>
  <p class="project-detail__lead">
    Ein im Team von Grund auf entwickeltes Spielprojekt aus dem
    Software-Engineering-Kurs.
  </p>
  <p>
    Statt ein vorhandenes, einfaches Spiel nachzubauen, entwickelten wir eine eigene
    Spielidee samt Konzepten, Regeln und technischer Struktur. Dadurch wurde das
    Projekt wesentlich anspruchsvoller als für den Kurs notwendig. Der geplante
    Umfang war letztlich größer als der verfügbare Zeitrahmen, weshalb das Spiel
    nicht vollständig fertiggestellt wurde. Gerade dadurch war das Projekt eine
    wertvolle Erfahrung in Requirements Engineering, Architektur, Teamarbeit und
    realistischem Scoping.
  </p>
  <div class="project-tags"><span>Scala</span><span>Software Engineering</span><span>Game Design</span><span>Teamprojekt</span></div>
  <a class="project-github" href="https://github.com/htwg-codebreaker-org/codebreaker" target="_blank" rel="noopener">Repository auf GitHub -></a>
</article>

<article id="peer-to-peer-chatroom" class="project-detail">
  <div class="project-detail__topline">
    <span>Rechnernetze · Hochschulprojekt</span>
    <span class="project-status">Kursprojekt</span>
  </div>
  <h2>Peer2PeerChatRoom</h2>
  <p class="project-detail__lead">
    Ein Chatroom mit eigenem Anwendungsprotokoll und einer Kombination aus zentraler
    Koordination und direkter Peer-to-Peer-Kommunikation.
  </p>
  <p>
    Clients registrieren sich zunächst an einem zentralen Server und können darüber
    Teilnehmer sowie Gruppennachrichten verwalten. Private Chats werden anschließend
    direkt zwischen den Clients aufgebaut. Das Projekt verbindet TCP, UDP, Sockets,
    Nebenläufigkeit und den Entwurf eines eigenen textbasierten Protokolls.
  </p>
  <div class="project-tags"><span>Python</span><span>TCP</span><span>UDP</span><span>Sockets</span><span>Eigenes Protokoll</span></div>
  <a class="project-github" href="https://github.com/IamNico42/Peer2PeerChatRoom" target="_blank" rel="noopener">Repository auf GitHub -></a>
</article>

<article id="ferienwohnungplattform" class="project-detail">
  <div class="project-detail__topline">
    <span>Datenbanken · Hochschulprojekt</span>
    <span class="project-status">Kursprojekt</span>
  </div>
  <h2>Ferienwohnungplattform-DB1</h2>
  <p class="project-detail__lead">
    Eine Buchungsplattform für Ferienwohnungen, erstellt im Datenbankkurs.
  </p>
  <p>
    Im Mittelpunkt standen die Modellierung der fachlichen Zusammenhänge, die
    Überführung in ein relationales Schema und die Umsetzung der Buchungslogik auf
    Datenbankebene. Das Projekt verbindet damit Datenmodellierung, SQL und die
    konsistente Abbildung realer Abläufe.
  </p>
  <div class="project-tags"><span>SQL</span><span>Relationales Modell</span><span>Datenmodellierung</span><span>Buchungssystem</span></div>
  <a class="project-github" href="https://github.com/IamNico42/Ferienwohnungplattform-DB1" target="_blank" rel="noopener">Repository auf GitHub -></a>
</article>

<article id="portfolio" class="project-detail">
  <div class="project-detail__topline">
    <span>Knowledge Base · Persönliches Projekt</span>
    <span class="project-status project-status--active">Wird laufend erweitert</span>
  </div>
  <h2>Nico Portfolio</h2>
  <p class="project-detail__lead">
    Diese Website ist selbst ein Projekt: eine aus Obsidian gepflegte technische
    Wissensbasis, die automatisiert als statische Website veröffentlicht wird.
  </p>
  <p>
    Markdown-Inhalte werden mit MkDocs Material aufbereitet und über GitHub Pages
    veröffentlicht. Eigene Templates, CSS und JavaScript erweitern das Theme um die
    persönliche Startseite, Animationen und künftig einen echten Wissensgraphen.
  </p>
  <div class="project-tags"><span>MkDocs</span><span>Obsidian</span><span>Markdown</span><span>GitHub Pages</span></div>
  <a class="project-github" href="https://github.com/IamNico42/portfolio" target="_blank" rel="noopener">Repository auf GitHub -></a>
</article>

</div>
