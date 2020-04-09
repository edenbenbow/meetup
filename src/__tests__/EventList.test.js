import React, { Component } from 'react';
import {shallow} from "enzyme";
import EventList from '../EventList';
import Event from '../Event.js';


describe('<EventList /> component', () => {
    let EventListWrapper;

    test('render correct number of events', () => {
        let numberSelected = '3';
        EventListWrapper = shallow(<EventList numberSelected={numberSelected}/>);
        EventListWrapper.setState(
            {
                events: [
                    {
                        id: 1,
                        local_time: "19:00",
                        local_date: "2019-08-27",
                        name: "Microservices mit dem MicroProfile 3.x",
                        group: {
                            name: "Java User Group Hamburg",
                        },
                        yes_rsvp_count: 80,
                        visibility: "public",
                        address_1: "Große Elbstraße 36",
                        localized_location: "Hamburg, Deutschland",
                        description: "Wer Microservices in Java entwickeln möchte, muss nicht zwangsläufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verfügbar sind und bezüglich ihrer Funktionalität stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) für die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu zählen die Unterstützung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. Für den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gewählt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte für Enterprise Java und Systemintegration unterstützt er seine Kunden überwiegend durch Entwicklung, Reviews oder die Durchführung von Schulungen. Thilo ist (Co-)Autor mehrerer Bücher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelmäßig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups."
                    },
                    {
                        id: 2, yes_rsvp_count: 2, description: "desc2", group: {
                            name: "Java User Group Hamburg",
                        },
                    },
                    {
                        id: 3, yes_rsvp_count: 3, description: "desc3", group: {
                            name: "Java User Group Hamburg",
                        },
                    },
                    {
                        id: 4, yes_rsvp_count: 4, description: "desc4", group: {
                            name: "Java User Group Hamburg",
                        },
                    }
                ]
            });
        expect(EventListWrapper.find(Event)).toHaveLength(3);
    });
    test('does not render without number selected', () => {
        EventListWrapper = shallow(<EventList />);
        EventListWrapper.setState(
            {
                events: [
                    {
                        id: 1,
                        local_time: "19:00",
                        local_date: "2019-08-27",
                        name: "Microservices mit dem MicroProfile 3.x",
                        group: {
                            name: "Java User Group Hamburg",
                        },
                        yes_rsvp_count: 80,
                        visibility: "public",
                        address_1: "Große Elbstraße 36",
                        localized_location: "Hamburg, Deutschland",
                        description: "Wer Microservices in Java entwickeln möchte, muss nicht zwangsläufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verfügbar sind und bezüglich ihrer Funktionalität stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) für die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu zählen die Unterstützung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. Für den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gewählt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte für Enterprise Java und Systemintegration unterstützt er seine Kunden überwiegend durch Entwicklung, Reviews oder die Durchführung von Schulungen. Thilo ist (Co-)Autor mehrerer Bücher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelmäßig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups."
                    },
                    {
                        id: 2, yes_rsvp_count: 2, description: "desc2", group: {
                            name: "Java User Group Hamburg",
                        },
                    },
                    {
                        id: 3, yes_rsvp_count: 3, description: "desc3", group: {
                            name: "Java User Group Hamburg",
                        },
                    },
                    {
                        id: 4, yes_rsvp_count: 4, description: "desc4", group: {
                            name: "Java User Group Hamburg",
                        },
                    }
                ]
            });
        expect(EventListWrapper.find(Event)).toHaveLength(0);
    });
});
