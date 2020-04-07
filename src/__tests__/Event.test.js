import React from 'react';
import { shallow } from 'enzyme';
import Event from "../Event";

describe('<Event /> component', () => {
    let EventWrapper;
    const event = [];
    beforeAll(() => {
        let testEvent = {
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
        };
        EventWrapper = shallow(<Event event={testEvent}/>);
    });

    test('render event overviews', () => {
        expect(EventWrapper).toHaveLength(1);
    });

    test('render details button', () => {
        expect(EventWrapper.find('.more_details')).toHaveLength(1);
    });

    test('render details after user clicks button', () => {
        EventWrapper.setState({
            showDetails: false
        });
        EventWrapper.find('.more_details').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('hide details after user clicks button', () => {
        EventWrapper.setState({
            showDetails: true
        });
        EventWrapper.find('.more_details').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    test('render event name', () => {
        expect(EventWrapper.find('.event_name')).toHaveLength(1);
        });

    test('render group name', () => {
        expect(EventWrapper.find('.group_name')).toHaveLength(1);
    });

    test('render date and time', () => {
        expect(EventWrapper.find('.date_time')).toHaveLength(1);
    });

    test('render rsvp count', () => {
        expect(EventWrapper.find('.event_rsvp')).toHaveLength(1);
    });


    });


