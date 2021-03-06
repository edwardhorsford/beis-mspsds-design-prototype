const Cases = require("./case-templates")
// Blueprint
// Cases.buildDefaultWithDifferences provides default values for all necessary fields
/*
    {
      type: 'Case',
      status: 'Open',
      id: '1811-xxxx',
      title: 'Untitled case',
      assignee: '',
      dateCreated: '18/10/2018',
      dateUpdated: '21/10/2018',
      report: {
        type: 'Allegation',
        date: '18/10/2018',
        summary: '',
        productType: 'Toy',
        hazardType: 'Electric shock',
        reporter: {
          type: "Consumer",
          name: "",
          phoneNumber: "",
          emailAddress: "",
          otherDetails: ""
        },
        correspondence: {
          type: 'Email',
          subject: '',
          body: '',
          attachment: '',
          attachmentDescription: ''
        }
      },
      products: [],
      businesses: [{id: 'b1', role: 'Manufacturer'}],
      contacts: [{id: 'c3', role: 'Reporter'}],
      attachments: [],
      related: [],
      activities: []
    }
*/
module.exports = {
  cases: [
    Cases.buildDefaultWithDifferences({
      id: '1811-0758',
      type: 'Question',
      products: ['p47'],
      title: 'Has anyone recently advised on snap bracelets / slap wraps?',
      creatorTeam: 'OPSS - TSC',
      dateUpdated: new Date(2018, 10 - 1, 21),
      dateCreated: new Date(2018, 10 - 1, 18),
      report: {
        type: 'Allegation',
        date: '18/10/2018',
        summary: `PCC Plymotion are looking to run some road safety awareness aimed at cyclists. One product they are considering handing out to raise awareness are snap bracelets / slap warps. These are hi viz plastic coated lengths of metal and if you tap them onto your arm they wrap around.We have previously advised not to supply these as there have been safety issues with the edges of the metal being sharp and cutting through the plastic outer and injuring users.
        Their website lists a number of authorities that they provide with promotional material. Red Zulu have provided a test certificate dated 06 September 2005 (12 years ago) to show that the snap bracelet has been tested against parts of EN71. The report states the item is NOT a toy but has passed the tests applied to it.
        The Supplier has also provided advice details of communication with TS. Plymotion have only provided an extract of this advice which is that:
        “My view is a bracelet handed out as part of an overall promotional road safety package cannot meet the reflective requirements for PPE. As such you would presumably argue that you therefore do not supply it as PPE, it is merely one of various items intended to promote the message that reflective clothing and other items increase safety. The product is not ‘intended to make the wearer stand out’. As the product is not considered PPE it does not need a CE Mark.
        As regards the Toy Safety requirements there are many items which at first sight do not appear to be toys but which are, through reason of their design, intended use, packaging, logos etc. There is nothing in what you have told me that makes me consider this would be classed as a toy, although ultimately the decision about this, and what to do as regards testing, is for you. Again, not being a toy it would not require a CE Mark.”
        I have asked for the full version of this advice.
        I can accept an argument that they may not be PPE but I struggle to see an argument that they are not toys if they are being given to children. What else are they? If the snap bracelets / slap warps are only given to adults I would suggest that they would be caught by GPSR and appropriately marked as not suitable for children and not to be used as PPE.`,
        productType: 'Toy',
        hazardType: '',
        reporter: {
          type: "Consumer",
          name: "Jenny Patterson",
          phoneNumber: "",
          emailAddress: "",
          otherDetails: ""
        },
      },
      businesses: [{
        id: 'b3',
        role: 'Manufacturer'
      }],
      contacts: [{
          id: 'c1',
          role: 'Main contact'
        },
        {
          id: 'c2',
          role: 'Head of procurement'
        }
      ],
      activities: require("./activities/1811-0758").activities,
      attachments: ['at1', 'at2'],
      // the below properties have not been set for this case
      // related: [],
    }),

    Cases.buildDefaultWithDifferences(Cases.setDateArguments(0, {
      // EMPTY CASE
      id: "1810-0000",
      title: "Untitled case",
      creator: "Tim Harwood",
    })),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(0, {
      id: "1810-0001",
      title: "Untitled case",
      report: {
        reporter: {
          name: "Mina Harker",
          type: "Consumer",
          phoneNumber: "07123 123123",
          emailAddress: "mina@castledracula.ro",
          otherDetails: "Other details captured during the report entry"
        },
      },
      products: [],
      activities: [],
    })),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(4, {
      id: "1810-0002",
      type: "Question",
      title: "Charge Worx, Travel plug adaptor –Electric shock, fire hazard",
      report: {
        reporter: {
          name: "Mina Harker",
          type: "Consumer",
          phoneNumber: "07123 123123",
          emailAddress: "mina@castledracula.ro",
          otherDetails: "Other details captured during the report entry"
        },
      },
      status: "Open",
      assignee: "Nick Golding",
      creator: "Tim Harwood",
      products: ["p1"],
      activities: require("./activities/1810-0002").activities
    })),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(4, {
      id: '0132-1421',
      title: 'ChargeWorx adaptor, Electric shock, fire hazard',
      report: {
        type: 'Allegation',
        date: '18 October 2018',
        summary: 'Adapter sparked in customer’s hand, causing a severe burn.',
        productType: 'Toy',
        hazardType: 'Electric shock',
        otherDetails: 'Other details captured during the report entry',
        reporter: {
          type: "Consumer",
          name: "Mina Harker",
          phoneNumber: "07123 123123",
          emailAddress: "mina@castledracula.ro",
          otherDetails: "Other details captured during the report entry"
        },
        correspondence: {
          type: 'Email',
          subject: '',
          body: '',
          attachment: '',
          attachmentDescription: ''
        },
        riskAssessment: {
          date: [1,2,3],
          authorType: 'foobar',
          productsAssessed: 'product',
          riskLevel: 'Severe',
          moreDetail: 'hello world'
        },
        testResult: {
          testResults:
            [
              {
                hasFile: 'no',
                title: 'Electrical safety test',
                date: [4, 2, 2019],
                dateAdded: [11, 2, 2020],
                legislation: 'Electrical Equipment (Safety) Regulations 2016',
                result: 'fail',
                details: '',
                type: 'Test result'
              }
            ]
        },
        history: {
          items:
            [
              {
                title: 'Initial enquiry',
                date: [14, 1, 2020],
                dateAdded: [30, 1, 2020],
                from: 'firstname.lastname@council.gov.uk',
                to: 'enquiries@manufacturer.co.uk',
                subject: 'Trading standards investigation',
                body: 'Dear foo...',
                attachment: '',
                attachmentDescription: '',
                type: 'Correspondence',
                correspondenceType: 'Email',
                hasFile: 'yes'
             },
              {
                title: 'Request for documents',
                date: [4, 2, 2020],
                dateAdded: [12, 2, 2020],
                from: '',
                to: '',
                subject: '',
                body: '',
                attachment: '',
                attachmentDescription: '',
                type: 'Correspondence',
                correspondenceType: 'Email',
                hasFile: 'no'
             },
              {
                title: 'Call with supplier',
                date: [2, 2, 2020],
                dateAdded: [12, 2, 2020],
                from: '',
                to: '',
                subject: '',
                body: '',
                attachment: '',
                attachmentDescription: '',
                type: 'Correspondence',
                correspondenceType: 'Phone call',
                hasFile: 'yes'
             },{
                title: 'Asking for contact details',
                date: [2, 2, 2020],
                dateAdded: [12, 2, 2020],
                from: '',
                to: '',
                subject: '',
                body: '',
                attachment: '',
                attachmentDescription: '',
                type: 'Correspondence',
                correspondenceType: 'Phone call',
                hasFile: 'yes'
             },
             {
               title: 'Destruction of the product',
               typeOfActionOther: '',
               date: [2, 2, 2020],
               dateAdded: [12, 2, 2020],
               legislation:
                'Gas Appliances (Enforcement) and Miscellaneous Amendments Regulations 2018 / EU 2016/426 Appliances Burning Gaseous Fuels',
               typeOfAction: 'mandatory',
               durationOfMeasure: 'permanent',
               scope: 'National',
               otherDetails: '',
               type: 'Corrective action',
               hasFile: 'no'
             },
             {
               title: 'Marking the product with appropriate warnings on the risks',
               typeOfActionOther: '',
               date: [1, 5, 2020],
               dateAdded: [13, 2, 2020],
               legislation:
                'Gas Appliances (Enforcement) and Miscellaneous Amendments Regulations 2018 / EU 2016/426 Appliances Burning Gaseous Fuels',
               typeOfAction: 'voluntary',
               durationOfMeasure: 'permanent',
               scope: 'EEA wide',
               otherDetails: 'sgseggse',
               type: 'Corrective action',
               hasFile: 'no'
             },
             {
               title: 'Impounded the product',
               typeOfActionOther: '',
               date: [11, 2, 2020],
               dateAdded: [12, 2, 2020],
               legislation:
                'Gas Appliances (Enforcement) and Miscellaneous Amendments Regulations 2018 / EU 2016/426 Appliances Burning Gaseous Fuels',
               typeOfAction: 'voluntary',
               durationOfMeasure: 'permanent',
               scope: 'EEA wide',
               otherDetails: 'sgseggse',
               type: 'Corrective action',
               hasFile: 'no'
             },
             {
              title: 'Item exploded in user\'s hand',
              date: [ 12, 12, 2019 ],
              dateAdded: [12, 2, 2020],
              approximateDate: '',
              otherDetails: 'Really dangerous thing happened.',
              type: 'Incident',
              hasFile: 'no'
            },
            {
              hasFile: 'yes',
              title: 'Electrical safety test',
              date: [4, 2, 2019],
              dateAdded: [11, 2, 2020],
              legislation: 'Electrical Equipment (Safety) Regulations 2016',
              result: 'fail',
              details: '',
              type: 'Test result'
            },
            {
              title: 'Assessed risk: serious',
              date: [1,2,2020],
              dateAdded: [1,2,2020],
              authorType: 'foobar',
              productsAssessed: 'product',
              riskLevel: 'Severe',
              moreDetail: 'hello world',
              type: 'Risk assessment',
              hide: true
            },
            {
              title: 'Assessed risk: low',
              date: [5,6,2010],
              dateAdded: [1,2,2020],
              authorType: 'self',
              productsAssessed: ['productA','productB'],
              riskLevel: 'Low risk',
              moreDetail: '',
              type: 'Risk assessment',
              hide: true
            }
           ]
         }
      },
      assignee: "Felix Bernhard",
      creator: "Felix Bernhard",
      products: ['p1', 'p2'],
      businesses: [{
          id: 'b1',
          role: 'Manufacturer – Charge Worx, International Travel Adaptor 931L'
        },
        {
          id: 'b2',
          role: 'Importer – Charge Worx, International Travel Adaptor 931L'
        }
      ],
      contacts: [{
          id: 'c3',
          role: 'Reporter'
        },
        {
          id: 'c1',
          role: 'Manufacturer'
        },
        {
          id: 'c2',
          role: 'Importer'
        }
      ],
      attachments: ['at1', 'at2'],
      related: [],
      activities: require("./activities/0132-1421.js").activities
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(3, {
      title: 'Untitled case',
      assignee: 'Ed Smith-Muller',
      products: ['p2'],
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(3, {
      type: 'Question',
      title: "Shouldn't this be categorised as a toy?",
      products: ['p4'],
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Entrapment, Injuries hazard', Cases.setDateArguments(3, {
      products: ['p5'],
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Choking hazard', Cases.setDateArguments(2, {
      assignee: 'Nick Golding',
      products: ['p6'],
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Suffocation hazard', Cases.setDateArguments(3, {
      assignee: 'Christopher Hunter',
      products: ['p7'],
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(2, {
      type: 'Question',
      assignee: 'Amanda Farrell',
      title: 'Has anyone successfully located the importer for these?',
      products: ['p8'],
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock hazard', Cases.setDateArguments(2, {
      assignee: 'Ed Smith-Muller',
      title: 'Has anyone successfully located the importer for these?',
      products: ['p9'],
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock hazard', Cases.setDateArguments(2, {
      products: ['p10'],
      assignee: 'Nick Golding',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Chemical hazard', Cases.setDateArguments(2, {
      products: ['p11'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(1, {
      type: 'Question',
      products: ['p12'],
      title: 'What legislation applies to importing these?',
      creatorTeam: 'OPSS - Processing',
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Damage to sight hazard', Cases.setDateArguments(1, {
      products: ['p13'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Chemical, choking hazard', Cases.setDateArguments(1, {
      products: ['p14'],
      assignee: 'Christopher Hunter',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(1, {
      products: ['p15'],
      assignee: 'Garry Oldboy',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(1, {
      type: 'Question',
      products: ['p16'],
      title: 'Haven\'t these been recalled already?',
      assignee: 'Adebola Showemimo',
      creatorTeam: 'OPSS - TSC',
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Poison hazard', Cases.setDateArguments(1, {
      products: ['p17'],
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(1, {
      status: 'Closed',
      products: ['p18'],
      assignee: 'Nick Golding',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(1, {
      type: 'Question',
      status: 'Closed',
      products: ['p19'],
      title: 'Can anyone think of another title?',
      assignee: 'Adebola Showemimo',
      creatorTeam: 'OPSS - TSC',
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(1, {
      products: ['p20'],
      assignee: 'Christopher Hunter',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(0, {
      products: ['p21'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(0, {
      products: ['p22'],
      assignee: 'Christopher Hunter',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(0, {
      products: ['p23'],
      assignee: 'Nick Golding',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(0, {
      status: 'Closed',
      products: ['p24'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(0, {
      products: ['p25'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(0, {
      products: ['p26'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(0, {
      type: 'Question',
      products: ['p27'],
      title: 'What legislation should I be testing under?',
      assignee: 'Adebola Showemimo',
      creatorTeam: 'OPSS - TSC',
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Injuries hazard', Cases.setDateArguments(0, {
      products: ['p28'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Entrapment, Injuries hazard', Cases.setDateArguments(0, {
      products: ['p29'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Choking hazard', Cases.setDateArguments(0, {
      products: ['p30'],
      assignee: 'Christopher Hunter',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Suffocation hazard', Cases.setDateArguments(0, {
      products: ['p31'],
      assignee: 'Nick Golding',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Strangulation hazard', Cases.setDateArguments(-1, {
      products: ['p32'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock hazard', Cases.setDateArguments(-1, {
      products: ['p33'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(-1, {
      type: 'Question',
      products: ['p34'],
      title: 'Toys (Safety) Regulations -can you plead guilty in absence?',
      assignee: 'Nick Golding',
      creatorTeam: 'OPSS - TSC',
      report: {
        summary: `I am about to serve summons on a toy safety issue, which is something we have not done for a while. I have established that these are Summary only offences, via S12(5) CPA and time limit is 12 months (reg 56). So, question is, can the defendant enter a plea of guilty in absence, hence requiring relevant pape work for such a plea to be served?
        Section 12 Magistrates Courts Act 1980 seems to say a plea of guilty can be made in absence, but my logic circuits question how someone can plead guilty by letter to an offence with a possible prison sentence.
        I can't find anything in the Criminal Procedure Rules which assists.`
      }
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Chemical hazard', Cases.setDateArguments(-1, {
      products: ['p35'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Damage to sight hazard', Cases.setDateArguments(-1, {
      products: ['p36'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Damage to sight hazard', Cases.setDateArguments(-1, {
      products: ['p37'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Chemical, Choking hazard', Cases.setDateArguments(-1, {
      products: ['p38'],
      assignee: 'Christopher Hunter',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-1, {
      products: ['p39'],
      assignee: 'Nick Golding',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-1, {
      products: ['p40'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-1, {
      products: ['p41'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setDateArguments(-1, {
      type: 'Question',
      status: 'Closed',
      products: ['p42'],
      assignee: 'Amanda Farrell',
      creatorTeam: 'OPSS - TSC',
    })),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-2, {
      status: 'Closed',
      products: ['p43'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-2, {
      products: ['p44'],
      assignee: 'Christopher Hunter',
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-2, {
      products: ['p45'],
      assignee: 'Ed Smith-Muller',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-2, {
      products: ['p46'],
      creatorTeam: 'OPSS - Processing',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-2, {
      status: 'Closed',
      products: ['p48'],
      assignee: 'Christopher Hunter',
    }))),
    Cases.buildDefaultWithDifferences(Cases.setHazardArguments('Electric shock, fire hazard', Cases.setDateArguments(-2, {
      products: ['p49'],
      creatorTeam: 'OPSS - Processing',
    })))
  ],
}
