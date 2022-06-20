Feature: Trasnformation d'une date relative en objet pour date-fns

  Scenario Outline: Transformation <useCase>
    When La date est <date>
    Then Elle est transformé en <dateTransforme>

    Examples: 
      | useCase          | date                            | dateTransforme                              |
      |   3 cas pluriels | il y a 10 ans 3 mois et 2 jours | {"years": "10", "months": "3", "days": "2"} |
      | 3 cas singuliers | il y a 1 an 1 mois et 1 jour    | {"years": "1", "months": "1", "days": "1"}  |
      |            2 cas | il y a 1 mois et 1 jour         | {"months": "1", "days": "1"}                |
      |            1 cas | il y a 1 jour                   | {"days": "1"}                               |
