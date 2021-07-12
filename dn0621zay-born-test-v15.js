var data, pageClass, questOneVal, questThreeVal, questFourVal, questFiveVal, questSixVal, questSevenVal, questTotal;
var pageNumber = 0;
var topValue = 0;
var totalScore = 0;
var score = 0;
var slideOne = 0;
var slideTwo = 0;
var slideThree = 0;
var slideCcore = 0;
var questTwoScore = 0;
var questThreeScore = 0;
var questSixScore = 0;
var questSevenScore = 0;



function loadDataset() {
  // THE JSON ARRAY from dn0621zay-born-test-v15.json.
  var json = [{
    "Page": "one",
    "Showheader": "false",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "Google Cloud",
        "Text": "<h1><div class='one'>Which path </div><div class='two'> will you take?</div></h1><h2>When you&#8217;re striving for top speed, you need to plot a proven path forward. Take this quiz to find out what your business needs for fast, smart, and cost-effective innovation.</h2><div class='start-btn'><a href='#' class='next'>Let's begin</a></div>",
        "TextBtn": "Let's Begin",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "PrimaryQuest": "Question text?",
        "Questions": [{
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "0%",
        "AnimationY": "18%",
        "AnimationScale": "0.7",
        "AnimationDuration": "1",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "two",
    "Showheader": "false",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>Based on your responses, we&#8217;ll generate a personalized, downloadable guide on how to innovate with speed and insight.</h2><a href='#' class='next'>Continue</a>",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "",
            "AnimationY": "0",
            "AnimationScale": "1",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "PrimaryQuest": "Question text?",
        "Questions": [{
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        },
        {
          "Question": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "24%",
        "AnimationY": "0%",
        "AnimationScale": "1.5",
        "AnimationDuration": "1",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "10%",
        "AnimationY": "110%",
        "AnimationScale": "1.2",
        "AnimationDuration": "1",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "three",
    "Showheader": "true",
    "Pagetype": "question",
    "Pagetyeptext": [
      {
        "Header": "Google Cloud",
        "HeaderH2": "",
        "Paragraph": "",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "false",
        "QuestionNumber": "1",
        "PrimaryQuest": "<h2>Over the next 6 to 12 months, what&#8217;s your main priority?</H2><p>Choose one of the following</p>",
        "Questions": [{
          "Question": "Building new products",
          "Score": ""
        },
        {
          "Question": "Scaling existing products",
          "Score": ""
        },
        {
          "Question": "Growing customer base",
          "Score": ""
        },
        {
          "Question": "Expanding into new markets",
          "Score": ""
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-10%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "83%",
        "AnimationY": "29%",
        "AnimationScale": "1.75",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "35%",
        "AnimationY": "130%",
        "AnimationScale": "1.3",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "four",
    "Showheader": "true",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>It starts with a vision</h2><h3>76% of IT leaders say they continue to struggle to strike the right balance between business innovation and operational excellence.</h3><p>Source: <a href='https://www.idg.com/tools-for-marketers/2021-state-of-the-cio/' target='_blank'>IDG</a></p><a href='#' class='next'>Continue</a>",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "PrimaryQuest": "Question text?",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.5",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "24%",
            "AnimationY": "35%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "23%",
        "AnimationY": "33%",
        "AnimationScale": "1.35",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "63%",
        "AnimationY": "63%",
        "AnimationScale": "2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "five",
    "Showheader": "true",
    "Pagetype": "question",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>CEOs&#8217; top priorities for 2021 show confidence</h2><h3>Over half of CEOs report growth as their primary focus, followed by technology change and corporate action.</h3><p>Source: Gartner</p>",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "QuestionNumber": "2",
        "PrimaryQuest": "<h2>What technologies do you use to create business value?</h2><p>Choose as many as you like.</p>",
        "Questions": [{
          "Question": "Smart analytics and AI",
          "Score": "1"
        },
        {
          "Question": "Managed scalable databases",
          "Score": "1"
        },
        {
          "Question": "Containers and microservices",
          "Score": "1"
        },
        {
          "Question": "Tools to process petabytes of data in minutes",
          "Score": "1"
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-10%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "63%",
        "AnimationY": "-5%",
        "AnimationScale": "1.8",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "23%",
        "AnimationY": "131%",
        "AnimationScale": "2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "six",
    "Showheader": "true",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>Consider this</h2><h3>The top 10% percent of companies leading in technology adoption perform twice as well as the bottom 25%.</h3><p>Source: <a href='https://www.accenture.com/_acnmedia/Thought-Leadership-Assets/PDF-5/Make-the-leap-take-the-lead-Report-v2.pdf' target='_blank'>Accenture</a></p><a href='#' class='next'>Continue</a>",
        "TextBtn": "",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "PrimaryQuest": "Question text?",
        "HelperText": "Helper text new",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "27%",
        "AnimationY": "17%",
        "AnimationScale": "1.5",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "19%",
        "AnimationY": "70%",
        "AnimationScale": "2.7",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "seven",
    "Showheader": "true",
    "Pagetype": "question",
    "Pagetyeptext": [
      {
        "Header": "Google Cloud",
        "HeaderH2": "",
        "Paragraph": "",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "QuestionNumber": "3",
        "PrimaryQuest": "<h2>In the last 12 months, which areas has your business innovated in?</H2><p>Choose as many as you like.</p>",
        "Questions": [{
          "Question": "Product innovation",
          "Score": "1"
        },
        {
          "Question": "Business process innovation",
          "Score": "1"
        },
        {
          "Question": "Business model innovation",
          "Score": "1"
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "45%",
        "AnimationY": "22%",
        "AnimationScale": "1.8",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-29%",
        "AnimationY": "152%",
        "AnimationScale": "2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "eight",
    "Showheader": "true",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>Innovation gives you an edge</h2><h3>Innovation leaders are about 15% more likely to prioritize business model innovation.</h3><p>Source: <a href='https://www.bcg.com/en-au/publications/2020/most-innovative-companies/overview' target='_blank'>BCG</a></p><a href='#' class='next'>Continue</a>",
        "TextBtn": "",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "PrimaryQuest": "Question text?",
        "HelperText": "Helper text new",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "1%",
        "AnimationY": "13%",
        "AnimationScale": "1.5",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-38%",
        "AnimationY": "46%",
        "AnimationScale": "1.75",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "nine",
    "Showheader": "true",
    "Pagetype": "question",
    "Pagetyeptext": [
      {
        "Header": "Google Cloud",
        "HeaderH2": "",
        "Paragraph": "",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "stack",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "QuestionNumber": "4",
        "PrimaryQuest": "<h2>What are your goals when innovating?</H2><p>Stack responses from highest (1) to lowest (4)</p>",
        "Questions": [{
          "Question": "Reducing risk during dev cycles ",
          "Score": "2"
        },
        {
          "Question": "Eliminate reliance on infrastructure",
          "Score": "4"
        },
        {
          "Question": "Lowering costs and complexity",
          "Score": "3"
        },
        {
          "Question": "Unlocking CX insights ",
          "Score": "1"
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-22%",
        "AnimationY": "35%",
        "AnimationScale": "2.7",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-56%",
        "AnimationY": "143%",
        "AnimationScale": "2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "ten",
    "Showheader": "true",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>The benefits stack up</h2><h3>One innovative research company, Arabesque AI, has gained 10x greater ability to analyze data while lowering server costs by 75% with Google Cloud.</h3><p>Source: <a href='https://cloud.google.com/customers/arabesque-ai' target='_blank'>Google Cloud</a></p><a href='#' class='next'>Continue</a>",
        "TextBtn": "",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "PrimaryQuest": "Question text?",
        "HelperText": "Helper text new",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-25%",
        "AnimationY": "26%",
        "AnimationScale": "1.3",
        "AnimationDuration": "1.3",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-97%",
        "AnimationY": "66%",
        "AnimationScale": "2.5",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "eleven",
    "Showheader": "true",
    "Pagetype": "question",
    "Pagetyeptext": [
      {
        "Header": "Google Cloud",
        "HeaderH2": "",
        "Paragraph": "",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "slider",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "QuestionNumber": "5",
        "PrimaryQuest": "<h2>How do you rate your appetite to:</h2><p>Slide from low (1) to high (5).</p>",
        "Questions": [{
          "Question": "Take bold ideas to market"
        },
        {
          "Question": "Value internal innovation and leadership"
        },
        {
          "Question": "Beat the competition"
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-53%",
        "AnimationY": "45%",
        "AnimationScale": "1.9",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-125%",
        "AnimationY": "137%",
        "AnimationScale": "2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "twelve",
    "Showheader": "true",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>Boldness leads to opportunity</h2><h3>Four factors drive performance for the top 10% of firms: innovation novelty, <div class='trip-mobile'><br/></div><a href='#'>triple threats<span>An ability to innovate products, processes, and business models at the same time.</span></a>, collaborative breadth, and corporate entrepreneurship.</h3><p>Source: <a href='https://www.csiro.au/thrivingthroughinnovation' target='_blank'>CSIRO</a></p><a href='#' class='next'>Continue</a>",
        "TextBtn": "",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "PrimaryQuest": "Question text?",
        "HelperText": "Helper text new",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-44%",
        "AnimationY": "16%",
        "AnimationScale": "1.4",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-149%",
        "AnimationY": "51%",
        "AnimationScale": "2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "thirteen",
    "Showheader": "true",
    "Pagetype": "question",
    "Pagetyeptext": [
      {
        "Header": "Google Cloud",
        "HeaderH2": "",
        "Paragraph": "",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "QuestionNumber": "6",
        "PrimaryQuest": "<h2>When innovating, how do you collaborate?</H2><p>Choose as many as you like</p>",
        "Questions": [{
          "Question": "Mostly in-house",
          "Score": "1"
        },
        {
          "Question": "Formal collaboration",
          "Score": "1"
        },
        {
          "Question": "With a range of partners",
          "Score": "1"
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-37%",
        "AnimationY": "47%",
        "AnimationScale": "2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-160%",
        "AnimationY": "149%",
        "AnimationScale": "1.75",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "Fourteen",
    "Showheader": "true",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>Teamwork makes the dream work</h2><h3>Co-creating innovations with a range of collaborators is 20% more important to performance than in-house innovation.</h3><p>Source: <a href='https://www.csiro.au/thrivingthroughinnovation' target='_blank'>CSIRO</a></p><a href='#' class='next'>Continue</a>",
        "TextBtn": "",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "PrimaryQuest": "Question text?",
        "HelperText": "Helper text new",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-31%",
        "AnimationY": "19%",
        "AnimationScale": "1.5",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-167%",
        "AnimationY": "48%",
        "AnimationScale": "1.75",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "fifteen",
    "Showheader": "true",
    "Pagetype": "question",
    "Pagetyeptext": [
      {
        "Header": "Google Cloud",
        "HeaderH2": "",
        "Paragraph": "",
        "TextBtn": "Continue",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "QuestionNumber": "7",
        "PrimaryQuest": "<h2>What holds you back from innovating the next best thing?</H2><p>Choose as many as you like</p>",
        "Questions": [{
          "Question": "Technical debt",
          "Score": ""
        },
        {
          "Question": "Employee skills",
          "Score": ""
        },
        {
          "Question": "Poor and/or costly app performance",
          "Score": ""
        },
        {
          "Question": "Inability to take advantage of data",
          "Score": ""
        },
        {
          "Question": "Lack of AI/ML",
          "Score": ""
        }],
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "88%",
            "AnimationY": "-200%",
            "AnimationScale": "1.75",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-37%",
        "AnimationY": "52%",
        "AnimationScale": "1.5",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-207%",
        "AnimationY": "196%",
        "AnimationScale": "1.75",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "1",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Blue",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "Sixteen",
    "Showheader": "true",
    "Pagetype": "text",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>Breaking down the barriers</h2><h3>The top 2 issues larger firms face when innovating are a lack of discipline in resource allocation (31%), and difficulty getting the organization behind the innovation strategy (27%).</h3><p>Source: <a href='https://www.bcg.com/en-au/publications/2020/most-innovative-companies/successful-innovation' target='_blank'>BCG</a></p><a href='#' class='next'>Continue</a>",
        "TextBtn": "",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1.2",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "PrimaryQuest": "Question text?",
        "HelperText": "Helper text new",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "Question text?",
        "Solpara": "Helper text new",
        "Solparahelper": "Helper text new",
        "SolHeaderThree": "Question text?",
        "CompanyLinks": [{
          "CoLinksOne": "",
          "CoLinksTwo": "",
          "CoLinksThree": "",
          "CoLinksFour": "",
          "CoLinksFive": "",
          "CoLinksSix": "",
          "CoLinksSeven": "",
          "CoLinksEight": "",
          "CoLinksNine": "",
          "CoLinksTen": ""
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "-23%",
        "AnimationY": "33%",
        "AnimationScale": "1.2",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-324%",
        "AnimationY": "96%",
        "AnimationScale": "2.5",
        "AnimationDuration": "1.2",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  },
  {
    "Page": "Seventeen",
    "Showheader": "true",
    "Pagetype": "result",
    "Pagetyeptext": [
      {
        "Header": "",
        "Text": "<h2>Congratulations</h2><h3>You&#8217;re on your way. <br><span>What&#8217;s next?</span></h3>",
        "TextBtn": "",
        "Animation": [
          {
            "AnimationType": "start",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "1",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          },
          {
            "AnimationType": "end",
            "AnimationX": "0%",
            "AnimationY": "18%",
            "AnimationScale": "0.7",
            "AnimationDuration": "1",
            "AnimationDelay": "",
            "AnimationTransition": "elastic"
          }
        ]
      }
    ],
    "QuestionTypetext": [
      {
        "QuestionType": "box",
        "QuestionSelect": "multi",
        "QuestionScore": "true",
        "PrimaryQuest": "Question text?",
        "HelperText": "Helper text new",
        "Questions": [{
          "Questionone": "",
          "Questiontwo": "",
          "Questionthree": "",
          "Questionfour": "",
          "Questionfive": "",
          "Questionsix": ""
        }]
      }
    ],
    "SolutionTypetext": [
      {
        "SolutionType": "level1",
        "SolHeader": "",
        "Solpath1": "<p>Speed, intelligence, and cost savings are the name of the game for your business. To innovate at pace, you know you need modern platforms, containers, serverless environments, smart analytics, and the ability to connect to the tools you already use. Now, you need a partner who can keep up.</p><p><b>So, what are your organization&#8217;s next steps to go to market successfully? </b></p><a class='findOut' href='#'>Let's find out</a>",
        "Solpath2": "<p>You know that data and insights will help you land new customers, build new products, and realize your full potential. To get there, consider moving away from manual, bolted-on integrations to seamless, sophisticated analytics solutions.</p><p><b>What are your organization&#8217;s next steps to leverage data and build a better experience for your customers?</b></p><a class='findOut' href='#'>Let's find out</a>",
        "Solpath3": "<p>Innovating quickly and easily is your main aim. After all, speed is the new imperative in business. You know that accelerating time-to-market gives you a competitive edge, and you&#8217;re after tools like containers and microservices to get you from code to production in record time – with increased developer productivity, simplified workflows, and optimized overhead.</p><p><b>So, what are your organization&#8217;s next steps to deploy faster and build a better experience for your customers?</b></p><a class='findOut' href='#'>Let's find out</a>",
        "Casestudy": [{
          "Customer": "Spotify",
          "Headline": "<h2>Spotify: Putting data to work, one listener at a time</h2>",
          "Body": "<p>Streaming audio requires fast product development, customer understanding, and powerful tools for recommendation, music discovery, and connecting people.</p><p>By employing automated, developer-friendly services in the cloud, Spotify&#8217;s teams can focus better on its core business, while gaining access to services, like data analytics, on which it can grow. Plus, being able to go faster and to more efficiently test new features and ideas helps Spotify focus its DNA of creativity and excellence on even more innovative experiences.",
          "KeyStats": "<p class='stats'>271 million<br>users globally<br>20,000<br>daily jobs moved to the cloud</p>",
          "Quote": "<p>Having infrastructure managed for us, with the lower-value details taken away, streamlines our ability to concentrate on what&#8217;s important to our users and give them the experiences they know and love.</p><p class='name'>Tyson Singer</p><p class='title'>Vice President, Technology and Platform, Spotify</p>"
        },
        {
          "Customer": "PayPal",
          "Headline": "<h2>PayPal: Improving the global economy for all</h2>",
          "Body": "<p>In the fast-moving online payments industry, PayPal&#8217;s mission is simple: bringing a better financial life to everyone and everywhere it can. To maintain its edge when the pandemic triggered a surge in digital traffic and transactions, the company needed to accelerate its infrastructure strategy.</p><p>PayPal&#8217;s decision to migrate horizontally scalable applications to the cloud saw it thrive during the crucial holiday season, as it quickly adjusted to demand without the costs of maintaining on-premises infrastructure.</p>",
          "KeyStats": "<p class='stats'>1,000<br/>payments per second at peak times<br/>20%<br/>of core infrastructure on Google Cloud, with more to come</p>",
          "Quote": "<p>We can only develop fast, build fast, and deploy fast if we have infrastructure that&#8217;s as nimble as we are.</p><p class='name'>Sri Shivananda</p><p class='title'>CTO, PayPal</p>"
        },
        {
          "Customer": "Zulily",
          "Headline": "<h2>Zulily: Driving loyalty with real-time insights</h2>",
          "Body": "<p>Cutting through the crowded online marketplace means offering an exceptional customer experience. Zulily – an online retailer of family clothing and home products – takes this to the next level, providing a unique website for nearly every visitor.</p><p>Rapidly flowing customer data on pages visited, deals clicked on, purchase history, and interaction with ads is centralized on Google Cloud, enabling the analysis, scalability, and reliability Zulily needs to continue engaging busy moms.</p>",
          "KeyStats": "<p class='stats'>5 billion<br/>clickstream events collected daily<br/>100+<br/>sales events launched each day</p>",
          "Quote": "<p>There isn&#8217;t a single experience of moms&#8217; engagement with us that isn&#8217;t somehow influenced by a flow or data element that&#8217;s running through our core Google Cloud-based systems.</p><p class='name'>Olly Downs</p><p class='title'>Vice President Marketing Technology, Data, and Machine Learning, Zulily</p>"
        },
        {
          "Customer": "Just Eat",
          "Headline": "<h2>Just Eat: Powerful data, delivered fresh</h2>",
          "Body": "<p>A pioneer in food delivery services, the Denmark-founded and now UK-based Just Eat has expanded to multiple countries and tens of millions of customers. However, double-digit growth introduced more challenges around scale and latency.</p><p>With BigQuery, Just Eat has unified millions of data points on a single platform – personalizing customer experiences and increasing its competitive advantage – while the Google Kubernetes Engine empowers the data science team with self-service machine learning pipelines.</p>",
          "KeyStats": "<p class='stats'>250 million<br/>data events ingested daily<br/>1 second<br/>data latency, reduced from 24 hours</p>",
          "Quote": "<p>We always want to be one step ahead, and that means being able to view and use information in real time.</p><p class='name'>Richard Haigh</p><p class='title'>CTO, Just Eat</p>"
        },
        {
          "Customer": "Arabesque AI",
          "Headline": "<h2>Arabesque AI: Rethinking finance, while reducing costs</h2>",
          "Body": "<p>Arabesque AI operates at the cutting edge of financial asset management, using AI to analyze and predict market behavior and build investment strategies. So as the company expanded its services to meet increasing demand for AI in finance, it needed a cutting-edge cloud platform.</p><p>Migrating its entire infrastructure to Google Cloud helped Arabesque AI minimize infrastructure management while maximizing scalability. Its next goal? Developing more, data-driven ways to serve clients better.</p>",
          "KeyStats": "<p class='stats'>75%<br/>reduced server costs<br/>10x<br/>increased ability to stream and analyze data</p>",
          "Quote": "<p>Most of our resources go toward research and only minimal effort is spent on operations. That&#8217;s the opposite of what we had before.</p><p class='name'>Nikolaos Kaplis</p><p class='title'>CTO, Arabesque AI</p>"
        },
        {
          "Customer": "King",
          "Headline": "<h2>King: Leading the way with machine learning</h2>",
          "Body": "<p>King, the mobile gaming company behind Candy Crush Saga and hundreds of other titles, blends art and science into a winning formula. As they looked to the future, this meant asking themselves whether a monolithic on-premises environment would support their goals.</p><p>By migrating to a cloud-based data platform, King maintained stability at scale and gained access to the latest machine learning technology – ideal for playtesting the next hit game.</p>",
          "KeyStats": "<p class='stats'>270 million<br/>players a month<br/>XX petabytes<br/>of data stored with minimal overheads</p>",
          "Quote": "<p>Our infrastructure needs to support hundreds of thousands of concurrent connections per second, as well as our data warehouse.</p><p class='name'>Jacques Erasmus</p><p class='title'>CIO, King</p>"
        },
        {
          "Customer": "Brandfolder",
          "Headline": "<h2>Brandfolder: Taking a smarter approach to brand-building</h2>",
          "Body": "<p>Digital asset management is a must for building brands today. That&#8217;s where Brandfolder comes in, offering a simple and scalable platform for customers to distribute assets wherever they need to go.</p><p>Big data, AI, and ML are key to helping Brandfolder meet these customers&#8217; unique needs and maintain its competitive edge. Thanks to the public cloud, Brandfolder can complete more sophisticated data analyses, create brand-specific ML models, and get them into production quickly.</p>",
          "KeyStats": "<p class='stats'>12x<br/>faster time-to-market<br/>50x<br/>increased analytics and data pipeline</p>",
          "Quote": "<p>Google Cloud made it easy to build an ML platform to quickly iterate through different brand intelligence use cases and release data-driven product features.</p><p class='name'>Ajay Rajasekharan</p><p class='title'>Head of Data Science, Brandfolder</p>"
        },
        {
          "Customer": "tiket.com",
          "Headline": "<h2>tiket.com: Staying ahead of sky-high demand</h2>",
          "Body": "<p>At the online travel agency tiket.com, customer experience is priority number one. As the company rapidly grew, it needed to support rising demand – especially during special events like Online Tiket Week, when customers can save 50% on travel and hotel stays.</p><p>With Google Cloud, tiket.com has overcome the limitations of its existing infrastructure to better manage and analyze data, lower latency, and reduce costs, while preparing to comply with new personal data protection laws.</p>",
          "KeyStats": "<p class='stats'>Zero downtime<br/>during infrastructure rebuild<br/>10+ terabytes<br/>of data migrated to the cloud</p>",
          "Quote": "<p>An everything-is-code environment enabled us to easily build new products and features; adapt to changing customer, market, or business circumstances; and move on quickly to new projects and activities.</p><p class='name'>Firman Gautama</p><p class='title'>VP Infrastructure & Security, tiket.com</p>"
        }]
      }
    ],
    "Animation": [
      {
        "AnimationType": "level1",
        "AnimationX": "0%",
        "AnimationY": "112%",
        "AnimationScale": "1",
        "AnimationDuration": "1",
        "AnimationTransition": "elastic"
      },
      {
        "AnimationType": "level1",
        "AnimationX": "-29%",
        "AnimationY": "121%",
        "AnimationScale": "0.6",
        "AnimationDuration": "1",
        "AnimationTransition": "elastic"
      }
    ],
    "ProgressBar": [
      {
        "QuestionNumber": "2",
        "QuestionNumberTotal": "7",
        "QuestionColor": "Yellow",
        "QuestionColorBtn": "Continue"
      }
    ]
  }
  ];


  console.log('json' + json); // this will show the info it in firebug console
  data = json;

  displayResult(data, pageNumber);

  changeStatusBar(data, pageNumber);

  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
  var quizContainWidth = $(".cx-blade-bgcolor-F5F6F9").width();
  var widthQuizCont = quizContainWidth * 5;
  var heightQuizCont = newHeight * 0.6;
  $(".quiz-container-slider").css("width", widthQuizCont);
  /* if(newHeight<560){
  $(".quiz-container-slider").css("margin-top", '-140px');
  } else {
    $(".quiz-container-slider").css("margin-top", '0');
  } */

}

$(function () {
  loadDataset();


});

var bigBall = document.querySelector('.cursor__ball--big');
var smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.option');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// Move the cursor
function onMouseMove(e) {
  gsap.to(bigBall, .3, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  gsap.to(smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
// function onMouseHover() {
//   gsap.to($bigBall, .3, {
//     scale: 4
//   })
// }
// function onMouseHoverOut() {
//   gsap.to($bigBall, .3, {
//     scale: 1
//   })
// }

/*
$('.next').on("mouseleave", function(){
  $('#cursor').css({'transform': 'scale(1)','background': 'white','opacity':'1'});
});
*/


// $( ".option" ).mouseover(function() {
//     console.log('sddsgsadf');
//   });

/*
$('.next').on("mouseleave", function(){
  $('#cursor').css({'transform': 'scale(1)','background': 'white','opacity':'1'});
});
*/

var introAnimation = bodymovin.loadAnimation({
  container: document.getElementById('lottieIntro'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-pattern_00_intro.json',
  animationData: { "v": "5.7.8", "fr": 60, "ip": 0, "op": 450, "w": 2776, "h": 496, "nm": "Pattern Intro [Lottie]", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Ellipse 93", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 29, "s": [20] }, { "t": 59, "s": [100], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 96, "s": [100] }, { "t": 139, "s": [80], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 183, "s": [80] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 227, "s": [80] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 275, "s": [20] }, { "t": 311, "s": [80], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 342, "s": [80] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 379, "s": [100] }, { "t": 418, "s": [20] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 29, "s": [1396.287, 477.345, 0], "to": [-26.667, -31.167, 0], "ti": [14.333, 18.333, 0] }, { "t": 59, "s": [1236.287, 290.345, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 96, "s": [1236.287, 290.345, 0], "to": [12.333, 12.833, 0], "ti": [-1.237, -1.287, 0] }, { "t": 139, "s": [1310.287, 367.345, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 183, "s": [1310.287, 367.345, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 227, "s": [1310.287, 367.345, 0], "to": [14.333, 18.333, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 275, "s": [1396.287, 477.345, 0], "to": [0, 0, 0], "ti": [26.667, 31.167, 0] }, { "t": 311, "s": [1310.287, 367.345, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 342, "s": [1310.287, 367.345, 0], "to": [-12.333, -12.833, 0], "ti": [-4.913, -6.284, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 379, "s": [1236.287, 290.345, 0], "to": [14.333, 18.333, 0], "ti": [-26.667, -31.167, 0] }, { "t": 418, "s": [1396.287, 477.345, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 29, "s": [108.045, 100, 100] }, { "t": 59, "s": [481.058, 456.922, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 96, "s": [481.058, 456.922, 100] }, { "t": 139, "s": [338.049, 338.049, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 183, "s": [338.049, 338.049, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 227, "s": [338.049, 338.049, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 275, "s": [108.045, 100, 100] }, { "t": 311, "s": [338.049, 338.049, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 342, "s": [338.049, 338.049, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 379, "s": [481.058, 456.922, 100] }, { "t": 418, "s": [108.045, 100, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [12.43, 13.168], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 93", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 469, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Triangle", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 29, "s": [100] }, { "t": 59, "s": [20], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 96, "s": [20] }, { "t": 139, "s": [20], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 183, "s": [20] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 227, "s": [50] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 275, "s": [80] }, { "t": 311, "s": [20], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 342, "s": [20] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 379, "s": [20] }, { "t": 418, "s": [100] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 29, "s": [1241.431, 286.956, 0], "to": [26.167, 31.333, 0], "ti": [-26.167, -31.333, 0] }, { "t": 59, "s": [1398.431, 474.956, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 96, "s": [1398.431, 474.956, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 139, "s": [1398.431, 474.956, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 183, "s": [1398.431, 474.956, 0], "to": [-5.417, -6.375, 0], "ti": [0.296, 0.361, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 227, "s": [1365.931, 436.706, 0], "to": [-14.905, -18.159, 0], "ti": [-5.417, -6.375, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 275, "s": [1309, 366, 0], "to": [5.417, 6.375, 0], "ti": [-14.905, -18.159, 0] }, { "t": 311, "s": [1398.431, 474.956, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 342, "s": [1398.431, 474.956, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 379, "s": [1398.431, 474.956, 0], "to": [-26.167, -31.333, 0], "ti": [26.167, 31.333, 0] }, { "t": 418, "s": [1241.431, 286.956, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 29, "s": [100, 100, 100] }, { "t": 59, "s": [25.016, 25.016, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 96, "s": [25.016, 25.016, 100] }, { "t": 139, "s": [25.016, 25.016, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 183, "s": [25.016, 25.016, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 227, "s": [40, 40, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 275, "s": [68, 68, 100] }, { "t": 311, "s": [25.016, 25.016, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 342, "s": [25.016, 25.016, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 379, "s": [25.016, 25.016, 100] }, { "t": 418, "s": [100, 100, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "ef": [{ "ty": 5, "nm": "Excite - Scale", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 1, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Position", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 2, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Opacity", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 3, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }], "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-26.672, 28.805], [-26.672, -28.805], [26.672, 28.805]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 45", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 469, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Pill", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 29, "s": [80] }, { "t": 59, "s": [50], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 96, "s": [50] }, { "t": 139, "s": [50], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 183, "s": [50] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 227, "s": [100] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 275, "s": [100] }, { "t": 311, "s": [50], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 342, "s": [50] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 379, "s": [50] }, { "t": 418, "s": [80] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 29, "s": [1294.776, 381.876, 0], "to": [11.167, 9.333, 0], "ti": [-11.167, -9.333, 0] }, { "t": 59, "s": [1361.776, 437.876, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 96, "s": [1361.776, 437.876, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 139, "s": [1361.776, 437.876, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 183, "s": [1361.776, 437.876, 0], "to": [-20.796, -23.979, 0], "ti": [0.82, 0.946, 0] }, { "i": { "x": 0.23, "y": 0.23 }, "o": { "x": 0.77, "y": 0.77 }, "t": 227, "s": [1237, 294, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 275, "s": [1237, 294, 0], "to": [20.796, 23.979, 0], "ti": [-20.796, -23.979, 0] }, { "t": 311, "s": [1361.776, 437.876, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 342, "s": [1361.776, 437.876, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 379, "s": [1361.776, 437.876, 0], "to": [-11.167, -9.333, 0], "ti": [11.167, 9.333, 0] }, { "t": 418, "s": [1294.776, 381.876, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 29, "s": [100, 100, 100] }, { "t": 59, "s": [66.426, 66.426, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 96, "s": [66.426, 66.426, 100] }, { "t": 139, "s": [66.426, 66.426, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 183, "s": [66.426, 66.426, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 227, "s": [136.426, 136.426, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 275, "s": [136.426, 136.426, 100] }, { "t": 311, "s": [66.426, 66.426, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 342, "s": [66.426, 66.426, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 379, "s": [66.426, 66.426, 100] }, { "t": 418, "s": [100, 100, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[22.788, -10.425], [-22.788, -10.425], [-22.788, 10.425], [22.788, 10.425]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 10.425, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 46", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 469, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "Square", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 29, "s": [50] }, { "t": 59, "s": [80], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 96, "s": [80] }, { "t": 139, "s": [100], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 183, "s": [100] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 227, "s": [20] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 275, "s": [50] }, { "t": 311, "s": [100], "h": 1 }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 342, "s": [100] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 379, "s": [80] }, { "t": 418, "s": [50] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 29, "s": [1356.925, 434, 0], "to": [-7.833, -9.167, 0], "ti": [20.5, 26.333, 0] }, { "t": 59, "s": [1309.925, 379, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 96, "s": [1309.925, 379, 0], "to": [-12.667, -17.167, 0], "ti": [-3.078, -3.816, 0] }, { "t": 139, "s": [1233.925, 276, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 183, "s": [1233.925, 276, 0], "to": [13.542, 16.792, 0], "ti": [-0.819, -1.052, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 227, "s": [1391.175, 479.75, 0], "to": [20.5, 26.333, 0], "ti": [26.208, 33.958, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 275, "s": [1356.925, 434, 0], "to": [-26.208, -33.958, 0], "ti": [7.833, 9.167, 0] }, { "t": 311, "s": [1233.925, 276, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 342, "s": [1233.925, 276, 0], "to": [12.667, 17.167, 0], "ti": [-3.392, -4.357, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 379, "s": [1309.925, 379, 0], "to": [20.5, 26.333, 0], "ti": [-7.833, -9.167, 0] }, { "t": 418, "s": [1356.925, 434, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 29, "s": [100, 100, 100] }, { "t": 59, "s": [144.453, 144.453, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 96, "s": [144.453, 144.453, 100] }, { "t": 139, "s": [197.797, 197.797, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 183, "s": [197.797, 197.797, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 227, "s": [40, 40, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 275, "s": [100, 100, 100] }, { "t": 311, "s": [197.797, 197.797, 100], "h": 1 }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 342, "s": [197.797, 197.797, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 379, "s": [144.453, 144.453, 100] }, { "t": 418, "s": [100, 100, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "ef": [{ "ty": 5, "nm": "Excite - Scale", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 1, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Position", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 2, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Opacity", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 3, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }], "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [21.752, 22.496], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 44", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 469, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "Question 6", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2084.072, 182.708, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 10, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, 0.067], [37.549, 23.867], [18.886, 0.347], [0, -23.867], [-18.936, 0.348], [-37.549, 23.867], [-56.286, 0.155], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 38, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.574, 0.242], [18.842, -23.692], [0.036, 0.258], [-18.949, -23.727], [-37.493, 0.117], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 69, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.574, 0.242], [18.842, -23.692], [0.036, 0.258], [-18.949, -23.727], [-37.493, 0.117], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 101, "s": [{ "i": [[0, 0], [4.694, 0.004], [9.386, 0], [4.649, -0.004], [9.462, 0], [4.739, -0.012], [9.28, 0], [4.673, 0.012], [9.411, 0]], "o": [[-9.421, 0], [-4.677, -0.004], [-9.312, 0], [-4.74, 0.004], [-9.495, 0], [-4.648, 0.012], [-9.363, 0], [-4.714, -0.012], [0, 0]], "v": [[75.097, -23.867], [56.297, -23.875], [37.549, -23.883], [18.886, -23.875], [0, -23.867], [-18.936, -23.843], [-37.549, -23.82], [-56.286, -23.844], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 133, "s": [{ "i": [[0, 0], [4.694, 0.004], [9.386, 0], [4.649, -0.004], [9.462, 0], [4.739, -0.012], [9.28, 0], [4.673, 0.012], [9.411, 0]], "o": [[-9.421, 0], [-4.677, -0.004], [-9.312, 0], [-4.74, 0.004], [-9.495, 0], [-4.648, 0.012], [-9.363, 0], [-4.714, -0.012], [0, 0]], "v": [[75.097, -23.867], [56.297, -23.875], [37.549, -23.883], [18.886, -23.875], [0, -23.867], [-18.936, -23.843], [-37.549, -23.82], [-56.286, -23.844], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 160, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, -12.308], [37.549, -0.758], [18.886, -12.028], [0, -23.867], [-18.936, -11.902], [-37.549, -0.758], [-56.286, -12.095], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 186, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, -12.308], [37.549, -0.758], [18.886, -12.028], [0, -23.867], [-18.936, -11.902], [-37.549, -0.758], [-56.286, -12.095], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 220, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, 0.067], [37.549, 23.867], [18.886, 0.347], [0, -23.867], [-18.936, 0.348], [-37.549, 23.867], [-56.286, 0.155], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 247, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, 0.067], [37.549, 23.867], [18.886, 0.347], [0, -23.867], [-18.936, 0.348], [-37.549, 23.867], [-56.286, 0.155], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 271, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.574, 0.242], [18.842, -23.692], [0.036, 0.258], [-18.949, -23.727], [-37.493, 0.117], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 295, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.574, 0.242], [18.842, -23.692], [0.036, 0.258], [-18.949, -23.727], [-37.493, 0.117], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 328, "s": [{ "i": [[0, 0], [4.694, 0.004], [9.386, 0], [4.649, -0.004], [9.462, 0], [4.739, -0.012], [9.28, 0], [4.673, 0.012], [9.411, 0]], "o": [[-9.421, 0], [-4.677, -0.004], [-9.312, 0], [-4.74, 0.004], [-9.495, 0], [-4.648, 0.012], [-9.363, 0], [-4.714, -0.012], [0, 0]], "v": [[75.097, -23.867], [56.297, -23.875], [37.549, -23.883], [18.886, -23.875], [0, -23.867], [-18.936, -23.843], [-37.549, -23.82], [-56.286, -23.844], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 362, "s": [{ "i": [[0, 0], [4.694, 0.004], [9.386, 0], [4.649, -0.004], [9.462, 0], [4.739, -0.012], [9.28, 0], [4.673, 0.012], [9.411, 0]], "o": [[-9.421, 0], [-4.677, -0.004], [-9.312, 0], [-4.74, 0.004], [-9.495, 0], [-4.648, 0.012], [-9.363, 0], [-4.714, -0.012], [0, 0]], "v": [[75.097, -23.867], [56.297, -23.875], [37.549, -23.883], [18.886, -23.875], [0, -23.867], [-18.936, -23.843], [-37.549, -23.82], [-56.286, -23.844], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 396, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, -12.308], [37.549, -0.758], [18.886, -12.028], [0, -23.867], [-18.936, -11.902], [-37.549, -0.758], [-56.286, -12.095], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 422, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, -12.308], [37.549, -0.758], [18.886, -12.028], [0, -23.867], [-18.936, -11.902], [-37.549, -0.758], [-56.286, -12.095], [-75.097, -23.867]], "c": false }] }, { "t": 449, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, 0.067], [37.549, 23.867], [18.886, 0.347], [0, -23.867], [-18.936, 0.348], [-37.549, 23.867], [-56.286, 0.155], [-75.097, -23.867]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 10, "s": [0.988235294819, 0.78823530674, 0.203921571374, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 38, "s": [0.976470589638, 0.670588254929, 0, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 69, "s": [0.976470589638, 0.670588254929, 0, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 101, "s": [1, 1, 1, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 133, "s": [1, 1, 1, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 160, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 186, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 220, "s": [0.988235294819, 0.78823530674, 0.203921571374, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 247, "s": [0.988235294819, 0.78823530674, 0.203921571374, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 271, "s": [0.976470589638, 0.670588254929, 0, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 295, "s": [0.976470589638, 0.670588254929, 0, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 328, "s": [1, 1, 1, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 362, "s": [1, 1, 1, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 396, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 422, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }, { "t": 449, "s": [0.988235294819, 0.78823530674, 0.203921571374, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [1.043, 0.93], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q5 - 3", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 486, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 6, "ty": 4, "nm": "Q6 Poly 6", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [30] }, { "t": 47, "s": [100], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [100] }, { "t": 101, "s": [100], "h": 1 }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.475], "y": [0] }, "t": 262, "s": [30] }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.423], "y": [0] }, "t": 291, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.405], "y": [0] }, "t": 330, "s": [40] }, { "t": 362, "s": [100], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.364], "y": [0] }, "t": 387, "s": [100] }, { "t": 406, "s": [100], "h": 1 }, { "i": { "x": [0.666], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [100] }, { "t": 449, "s": [30] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.087, 143.752, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-83.901, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 18, "s": [-93.445, -93.445, 100] }, { "t": 47, "s": [-14.185, -14.185, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [-19.886, -19.886, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 72, "s": [-14.185, -14.185, 100] }, { "t": 101, "s": [-14.185, -14.185, 100], "h": 1 }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 126, "s": [-14.185, -14.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 165, "s": [-48.185, -48.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 202, "s": [-14.185, -14.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 232, "s": [-14.185, -14.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.475, 0.475, 0.239], "y": [0, 0, 0] }, "t": 262, "s": [-93.445, -93.445, 100] }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.423, 0.423, 0.329], "y": [0, 0, 0] }, "t": 291, "s": [-14.185, -14.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.405, 0.405, 0.329], "y": [0, 0, 0] }, "t": 330, "s": [-48.185, -48.185, 100] }, { "t": 362, "s": [-14.185, -14.185, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.364, 0.364, 0.321], "y": [0, 0, 0] }, "t": 387, "s": [-14.185, -14.185, 100] }, { "t": 406, "s": [-14.185, -14.185, 100], "h": 1 }, { "i": { "x": [0.666, 0.666, 0.715], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 424, "s": [-14.185, -14.185, 100] }, { "t": 449, "s": [-93.445, -93.445, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[71.876, -7.016], [0, -41.951], [-71.876, -7.016], [-71.876, 41.951], [71.876, 41.951]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 47, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 101, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.202], "y": [0] }, "t": 262, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.286], "y": [0] }, "t": 291, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.283], "y": [0] }, "t": 330, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 362, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.27], "y": [0] }, "t": 387, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 406, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 449, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 487, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "Q6 - TRiangle 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [100] }, { "t": 47, "s": [30], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [30] }, { "t": 101, "s": [20], "h": 1 }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.475], "y": [0] }, "t": 262, "s": [100] }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.423], "y": [0] }, "t": 291, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.405], "y": [0] }, "t": 330, "s": [20] }, { "t": 362, "s": [30], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.364], "y": [0] }, "t": 387, "s": [30] }, { "t": 406, "s": [20], "h": 1 }, { "i": { "x": [0.666], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [20] }, { "t": 449, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2575.424, 142.382, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 18, "s": [100, 100, 100] }, { "t": 47, "s": [622.77, 622.77, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [0.522, 0.522, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 72, "s": [622.77, 622.77, 100] }, { "t": 101, "s": [622.77, 622.77, 100], "h": 1 }, { "i": { "x": [0.544, 0.544, 0.667], "y": [0.343, 0.343, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 126, "s": [622.77, 622.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 165, "s": [622.77, 622.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 202, "s": [362.77, 362.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 232, "s": [622.77, 622.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.475, 0.475, 0.239], "y": [0, 0, 0] }, "t": 262, "s": [100, 100, 100] }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.423, 0.423, 0.329], "y": [0, 0, 0] }, "t": 291, "s": [622.77, 622.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.405, 0.405, 0.329], "y": [0, 0, 0] }, "t": 330, "s": [622.77, 622.77, 100] }, { "t": 362, "s": [622.77, 622.77, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.364, 0.364, 0.321], "y": [0, 0, 0] }, "t": 387, "s": [622.77, 622.77, 100] }, { "t": 406, "s": [622.77, 622.77, 100], "h": 1 }, { "i": { "x": [0.666, 0.666, 0.715], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 424, "s": [622.77, 622.77, 100] }, { "t": 449, "s": [100, 100, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-7.916, 7.916], [-7.916, -7.916], [7.916, 7.916]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "t": 47, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 101, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.205], "y": [0] }, "t": 262, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.289], "y": [0] }, "t": 291, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.287], "y": [0] }, "t": 330, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 362, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.275], "y": [0] }, "t": 387, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 406, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [0.946], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 449, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 45.095, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 55", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 0, "k": [0.716733038425, 0.933333337307, 0.360784322023, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 487, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 8, "ty": 4, "nm": "Q6 Circle 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [60] }, { "t": 47, "s": [60], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [60] }, { "t": 101, "s": [30], "h": 1 }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [60] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.475], "y": [0] }, "t": 262, "s": [60] }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.423], "y": [0] }, "t": 291, "s": [60] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.405], "y": [0] }, "t": 330, "s": [100] }, { "t": 362, "s": [60], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.364], "y": [0] }, "t": 387, "s": [60] }, { "t": 406, "s": [30], "h": 1 }, { "i": { "x": [0.666], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [30] }, { "t": 449, "s": [60] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.087, 145.398, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [27.449, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 18, "s": [100, 100, 100] }, { "t": 47, "s": [100, 100, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 72, "s": [100, 100, 100] }, { "t": 101, "s": [171.541, 171.541, 100], "h": 1 }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 126, "s": [171.541, 171.541, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 165, "s": [43.541, 43.541, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 202, "s": [230, 230, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 232, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.475, 0.475, 0.239], "y": [0, 0, 0] }, "t": 262, "s": [100, 100, 100] }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.423, 0.423, 0.329], "y": [0, 0, 0] }, "t": 291, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.405, 0.405, 0.329], "y": [0, 0, 0] }, "t": 330, "s": [43.541, 43.541, 100] }, { "t": 362, "s": [100, 100, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.364, 0.364, 0.321], "y": [0, 0, 0] }, "t": 387, "s": [100, 100, 100] }, { "t": 406, "s": [171.541, 171.541, 100], "h": 1 }, { "i": { "x": [0.666, 0.666, 0.715], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 424, "s": [171.541, 171.541, 100] }, { "t": 449, "s": [100, 100, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, -16.212], [-15.16, 0], [0, 0]], "o": [[0, 16.212], [0, 0], [-15.16, 0]], "v": [[-13.725, 0], [13.725, 29.354], [13.725, -29.354]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 96", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 47, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 101, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.202], "y": [0] }, "t": 262, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.286], "y": [0] }, "t": 291, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.283], "y": [0] }, "t": 330, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 362, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.27], "y": [0] }, "t": 387, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 406, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 449, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 487, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 9, "ty": 4, "nm": "Q6 Poly 5", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [40] }, { "t": 47, "s": [40], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [40] }, { "t": 101, "s": [40], "h": 1 }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.475], "y": [0] }, "t": 262, "s": [40] }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.423], "y": [0] }, "t": 291, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.405], "y": [0] }, "t": 330, "s": [40] }, { "t": 362, "s": [40], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.364], "y": [0] }, "t": 387, "s": [40] }, { "t": 406, "s": [40], "h": 1 }, { "i": { "x": [0.666], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [40] }, { "t": 449, "s": [40] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.087, 144.252, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [40.397, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 18, "s": [100, 100, 100] }, { "t": 47, "s": [100, 100, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 72, "s": [100, 100, 100] }, { "t": 101, "s": [90.095, 90.095, 100], "h": 1 }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 126, "s": [90.095, 90.095, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 165, "s": [141.095, 141.095, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 202, "s": [108, 108, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 232, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.475, 0.475, 0.239], "y": [0, 0, 0] }, "t": 262, "s": [100, 100, 100] }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.423, 0.423, 0.329], "y": [0, 0, 0] }, "t": 291, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.405, 0.405, 0.329], "y": [0, 0, 0] }, "t": 330, "s": [141.095, 141.095, 100] }, { "t": 362, "s": [100, 100, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.364, 0.364, 0.321], "y": [0, 0, 0] }, "t": 387, "s": [100, 100, 100] }, { "t": 406, "s": [90.095, 90.095, 100], "h": 1 }, { "i": { "x": [0.666, 0.666, 0.715], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 424, "s": [90.095, 90.095, 100] }, { "t": 449, "s": [100, 100, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-20.198, -25.239], [20.198, -50.478], [20.198, 50.478], [-20.198, 25.239]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 2", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 47, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 101, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.202], "y": [0] }, "t": 262, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.286], "y": [0] }, "t": 291, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.283], "y": [0] }, "t": 330, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 362, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.27], "y": [0] }, "t": 387, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 406, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 449, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 487, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 10, "ty": 4, "nm": "Q6 Rectangle 57", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [30] }, { "t": 47, "s": [30], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [30] }, { "t": 101, "s": [80], "h": 1 }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [30] }, { "i": { "x": [0], "y": [-6.081] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.475], "y": [0] }, "t": 262, "s": [30] }, { "i": { "x": [0.544], "y": [7.122] }, "o": { "x": [0.423], "y": [0] }, "t": 291, "s": [30] }, { "i": { "x": [0], "y": [-25.705] }, "o": { "x": [0.405], "y": [0] }, "t": 330, "s": [30] }, { "t": 362, "s": [30], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.364], "y": [0] }, "t": 387, "s": [30] }, { "t": 406, "s": [80], "h": 1 }, { "i": { "x": [0.666], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [80] }, { "t": 449, "s": [30] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.086, 144.239, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [50.755, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 18, "s": [100, 100, 100] }, { "t": 47, "s": [100, 100, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 72, "s": [100, 100, 100] }, { "t": 101, "s": [45.818, 45.818, 100], "h": 1 }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 126, "s": [45.818, 45.818, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 165, "s": [80.818, 80.818, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 202, "s": [87, 87, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 232, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.475, 0.475, 0.239], "y": [0, 0, 0] }, "t": 262, "s": [100, 100, 100] }, { "i": { "x": [0.544, 0.544, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.423, 0.423, 0.329], "y": [0, 0, 0] }, "t": 291, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.405, 0.405, 0.329], "y": [0, 0, 0] }, "t": 330, "s": [80.818, 80.818, 100] }, { "t": 362, "s": [100, 100, 100], "h": 1 }, { "i": { "x": [0.554, 0.554, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.364, 0.364, 0.321], "y": [0, 0, 0] }, "t": 387, "s": [100, 100, 100] }, { "t": 406, "s": [45.818, 45.818, 100], "h": 1 }, { "i": { "x": [0.666, 0.666, 0.715], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 424, "s": [45.818, 45.818, 100] }, { "t": 449, "s": [100, 100, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [50.755, 111.929], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 56", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 18, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 47, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 72, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 101, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 126, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 165, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 202, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 232, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.202], "y": [0] }, "t": 262, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0.544], "y": [1] }, "o": { "x": [0.286], "y": [0] }, "t": 291, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.283], "y": [0] }, "t": 330, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 362, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1], "h": 1 }, { "i": { "x": [0.554], "y": [1] }, "o": { "x": [0.27], "y": [0] }, "t": 387, "s": [0.933333337307, 0.403921574354, 0.360784322023, 1] }, { "t": 406, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1], "h": 1 }, { "i": { "x": [1], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 424, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 449, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 487, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 11, "ty": 4, "nm": "Step 3", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 0, "s": [100] }, { "t": 57, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 92, "s": [100] }, { "t": 149, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 186, "s": [100] }, { "t": 243, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 278, "s": [100] }, { "t": 335, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 364, "s": [100] }, { "t": 421, "s": [0], "h": 1 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2364.261, 341.274, 0], "to": [13, -13, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [-13, 13, 0] }, { "t": 421, "s": [2442.261, 263.274, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 116", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 12, "ty": 4, "nm": "Step 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2275.181, 411.504, 0], "to": [14.847, -11.705, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [-14.847, 11.705, 0] }, { "t": 421, "s": [2364.261, 341.274, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 115", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 13, "ty": 4, "nm": "Step 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2196.458, 480.637, 0], "to": [13.12, -11.522, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [-13.12, 11.522, 0] }, { "t": 421, "s": [2275.181, 411.504, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 114", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 14, "ty": 4, "nm": "Step 0", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 0, "s": [0] }, { "t": 57, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 92, "s": [0] }, { "t": 149, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 186, "s": [0] }, { "t": 243, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 278, "s": [0] }, { "t": 335, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 364, "s": [0] }, { "t": 421, "s": [100], "h": 1 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2090.458, 564.637, 0], "to": [17.667, -14, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [-17.667, 14, 0] }, { "t": 421, "s": [2196.458, 480.637, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 114", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 15, "ty": 4, "nm": "Marker 4", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [266.782, 435.048, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.964705884457, 0.68235296011, 0.662745118141, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 4", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 16, "ty": 4, "nm": "Marker 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [219.594, 327.782, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.992156863213, 0.886274516582, 0.57647061348, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 3", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 17, "ty": 4, "nm": "Marker 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [92.104, 210.651, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[10.55, -7.313], [-10.55, -10.55], [-7.313, 10.55]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.505882382393, 0.78823530674, 0.584313750267, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": -45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 2", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 18, "ty": 4, "nm": "Marker 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [12.43, 113.367, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.68235296011, 0.796078443527, 0.980392158031, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 19, "ty": 4, "nm": "00", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [242.9, 273.919, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[114.696, -59], [114.696, -155], [-192.5, -155]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 1, "ty": "sh", "ix": 2, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[114.696, 53], [114.696, 155], [52.5, 155]], "c": false }, "ix": 2 }, "nm": "Path 2", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 2, "ty": "sh", "ix": 3, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[192.5, 0], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 3", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 3, "ty": "sh", "ix": 4, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[114.696, -59], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 4", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 4, "ty": "sh", "ix": 5, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[114.696, 53], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 5", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 5, "ty": "sh", "ix": 6, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-116.5, -59], [114.696, -59]], "c": false }, "ix": 2 }, "nm": "Path 6", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 6, "ty": "sh", "ix": 7, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[4.5, 53], [114.696, 53]], "c": false }, "ix": 2 }, "nm": "Path 7", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "mm", "mm": 1, "nm": "Merge Paths 1", "mn": "ADBE Vector Filter - Merge", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 30, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "00", "np": 9, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 20, "ty": 4, "nm": "Dashed Line", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1124.384, 475.15, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[95.554, 0], [-95.554, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 1, "k": [{ "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 0.711, "s": [71.293] }, { "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 214.59, "s": [22.293] }, { "t": 330.939453125, "s": [71.293] }], "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 11.147, "ix": 2 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Dashed Line", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 21, "ty": 4, "nm": "Line 105", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1137.331, 248.46, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-17.609, 0], [17.609, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 105", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 22, "ty": 4, "nm": "Line 99", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [723.521, 482.708, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-16.314, 0], [16.314, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 99", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 23, "ty": 4, "nm": "Line 104", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1460.508, 494.903, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-15.537, 0], [15.537, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 104", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 24, "ty": 4, "nm": "Q6 Diamond", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2377.609, 143.109, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [12.742, 12.742], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.964705884457, 0.68235296011, 0.662745118141, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.348, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 50", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 25, "ty": 4, "nm": "Line 96", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2685.884, 144.85, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[54.899, 0], [-54.899, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 96", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 26, "ty": 4, "nm": "Line 98", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2303.148, 137.628, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-23.047, 0], [23.047, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 98", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 27, "ty": 4, "nm": "Ellipse 94", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [789.296, 477.345, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 96.745, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [14.502, 15.363], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.658823549747, 0.854901969433, 0.709803938866, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 94", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 28, "ty": 4, "nm": "Q2 - 03", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [956.063, 361.575, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 16.109, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [22.247, -56.788], [22.247, -1.487], [-25.002, -1.487], [-25.002, 56.788], [-45.031, 56.788], [-45.031, 56.969], [-65.257, 56.788]], "c": false }] }, { "t": 55.465, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 144.438, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [22.247, -56.788], [22.247, -1.487], [-25.002, -1.487], [-25.002, 56.788], [-45.031, 56.788], [-45.031, 56.969], [-65.257, 56.788]], "c": false }] }, { "t": 188.924, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 306.984, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [22.247, -56.788], [22.247, -1.487], [-25.002, -1.487], [-25.002, 56.788], [-45.031, 56.788], [-45.031, 56.969], [-65.257, 56.788]], "c": false }] }, { "t": 334.361328125, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0.02], "y": [0.715] }, "o": { "x": [1.019], "y": [0] }, "t": 0.711, "s": [0] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.327], "y": [-0.082] }, "t": 62.309, "s": [28] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [1.019], "y": [0] }, "t": 115.35, "s": [0] }, { "i": { "x": [0.02], "y": [0.731] }, "o": { "x": [1.019], "y": [0] }, "t": 224.855, "s": [0] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.327], "y": [-0.061] }, "t": 283.031, "s": [28] }, { "t": 322.384765625, "s": [0] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 12.688, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 52.041, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 72.574, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 111.928, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 245.389, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 272.764, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 293.297, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "t": 318.962890625, "s": [1, 1, 1, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.576, 0.641], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q2 - 03", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 29, "ty": 4, "nm": "Q5 Mini", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1895.857, 134.982, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[4.85, -4.728], [-4.85, -3.274], [3.152, 4.728]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.996078431606, 0.96862745285, 0.878431379795, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.285, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q5 Mini", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 30, "ty": 4, "nm": "Q4 Mini", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1528.479, 479.116, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[4.508, -4.508], [-4.508, -4.508], [-4.508, 4.508], [4.508, 4.508]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.541176497936, 0.705882370472, 0.972549021244, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.411, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q4 Mini", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 31, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 120, "s": [0] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 147, "s": [100] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 327, "s": [100] }, { "t": 359.216796875, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1566.679, 229.894, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-4.115, -3.884], [4.115, -3.884], [4.08, 3.884]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.090196080506, 0.305882364511, 0.65098041296, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.9], "y": [0] }, "t": 158.977, "s": [5] }, { "t": 193.197, "s": [0], "h": 1 }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 247.391, "s": [0] }, { "t": 271.6953125, "s": [5] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 32, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 107, "s": [0] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 140.156, "s": [100] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 336.217, "s": [100] }, { "t": 362.27734375, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1593.093, 257.327, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-18.381, -17.609], [18.381, -17.609], [18.224, 17.609]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.352941185236, 0.737254917622, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.9], "y": [0] }, "t": 153.844, "s": [20] }, { "t": 193.197, "s": [0], "h": 1 }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 241.695, "s": [0] }, { "t": 266, "s": [20] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 33, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 95, "s": [0] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 128, "s": [100] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 342.217, "s": [100] }, { "t": 367.216796875, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1623.131, 289.15, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-34.292, -32.628], [34.292, -32.628], [34, 32.628]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.098039217293, 0.403921574354, 0.823529422283, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0.1], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 153.844, "s": [38] }, { "t": 193.197, "s": [0], "h": 1 }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 235.695, "s": [0] }, { "t": 259.6953125, "s": [38] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 34, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 75.783, "s": [0] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 112, "s": [100] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 348.217, "s": [100] }, { "t": 371.216796875, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1652.652, 319.327, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-49.381, -46.871], [49.381, -46.871], [48.96, 46.871]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.101960785687, 0.450980395079, 0.909803926945, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 145.289, "s": [50] }, { "t": 181.221, "s": [0], "h": 1 }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 230.695, "s": [0] }, { "t": 255, "s": [50] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 35, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1681.137, 349.504, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-64.469, -61.113], [64.469, -61.113], [63.92, 61.113]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 31.295, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 83, "s": [68] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 128.178, "s": [68] }, { "t": 162.398, "s": [0], "h": 1 }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 223.695, "s": [0] }, { "i": { "x": [0.02], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 248, "s": [68] }, { "i": { "x": [0.02], "y": [1] }, "o": { "x": [0.98], "y": [0] }, "t": 378, "s": [68] }, { "t": 438, "s": [0] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 36, "ty": 4, "nm": "Dashed Line", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1997.063, 319.876, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[84.641, 0], [-84.641, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 11.147, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 1, "k": [{ "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": -1, "s": [22.293] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 182.08, "s": [71.293] }, { "t": 449, "s": [22.293] }], "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 11.147, "ix": 2 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 52.605, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Dashed Line", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 37, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1834.439, 166.796, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, -16.04]], "o": [[16.993, 0], [0, 0]], "v": [[-15.363, -14.501], [15.363, 14.501]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 38, "ty": 4, "nm": "Q1 - 1 TEST", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [569.702, 396.142, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 30, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [-45.058, 40.602], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 60, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [13.872, -20.749], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 90, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-46.771, 12.594], [24.774, 16.886], [-4.26, -38.705], [-47.417, 34.987], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 158.326, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-46.771, 12.594], [31.322, 15.39], [-2.246, -37.209], [-47.417, 34.987], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 171.107, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [13.872, -20.749], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 188.146, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [-45.058, 40.602], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 301.031, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [-45.058, 40.602], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 328.723, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [13.872, -20.749], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 367.061, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-46.771, 12.594], [26.285, 17.884], [2.287, -33.717], [-47.417, 34.987], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 403.271, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-46.771, 12.594], [31.322, 15.39], [-2.246, -37.209], [-47.417, 34.987], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0.833, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 416.051, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [13.872, -20.749], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }, { "t": 433.087890625, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.237, 11.898], [-45.058, 40.602], [-7.627, 40.473], [45.058, 40.602]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 0.711, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 30, "s": [40.602] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 158.326, "s": [40.602] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 203.055, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 277.604, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 301.031, "s": [40.602] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 403.271, "s": [40.602] }, { "t": 448, "s": [0] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0.711, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.992156863213, 0.839215695858, 0.388235300779, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 158.326, "s": [0.976470589638, 0.670588254929, 0, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 203.055, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 277.604, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 326.592, "s": [0.992156863213, 0.839215695858, 0.388235300779, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 403.271, "s": [0.976470589638, 0.670588254929, 0, 1] }, { "t": 448, "s": [1, 1, 1, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.699, 0.758], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [198.54, 200.487], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q1 - 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 39, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 50, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [479.585, 273.239, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[6.733, -7.133], [-6.733, -7.133], [-6.733, 7.133], [6.733, 7.133]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.984313726425, 0.737254917622, 0.015686275437, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 40, "ty": 4, "nm": "Pattern/Main", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [1388, 248], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.547, 1.211], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Pattern/Main", "np": 1, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  autoplay: true,
  loop: true
})

var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-base-layer-2.json',
  animationData: { "v": "5.6.1", "fr": 60, "ip": 0, "op": 450, "w": 2776, "h": 600, "nm": "Base Layer", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 6, "ty": 4, "nm": "00", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [242.9, 273.919, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[114.696, -59], [114.696, -155], [-192.5, -155]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 1, "ty": "sh", "ix": 2, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[114.696, 53], [114.696, 155], [52.5, 155]], "c": false }, "ix": 2 }, "nm": "Path 2", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 2, "ty": "sh", "ix": 3, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[192.5, 0], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 3", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 3, "ty": "sh", "ix": 4, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[114.696, -59], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 4", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 4, "ty": "sh", "ix": 5, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[114.696, 53], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 5", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 5, "ty": "sh", "ix": 6, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-116.5, -59], [114.696, -59]], "c": false }, "ix": 2 }, "nm": "Path 6", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 6, "ty": "sh", "ix": 7, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[4.5, 53], [114.696, 53]], "c": false }, "ix": 2 }, "nm": "Path 7", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "mm", "mm": 1, "nm": "Merge Paths 1", "mn": "ADBE Vector Filter - Merge", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 30, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "00", "np": 9, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": -1, "op": 452, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "Step 3", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 0, "s": [100] }, { "t": 57, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 92, "s": [100] }, { "t": 149, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 186, "s": [100] }, { "t": 243, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 278, "s": [100] }, { "t": 335, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 364, "s": [100] }, { "t": 421, "s": [0], "h": 1 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2364.261, 341.274, 0], "to": [13, -13, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [-13, 13, 0] }, { "t": 421, "s": [2442.261, 263.274, 0], "h": 1 }], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 116", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 8, "ty": 4, "nm": "Step 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2275.181, 411.504, 0], "to": [14.847, -11.705, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [-14.847, 11.705, 0] }, { "t": 421, "s": [2364.261, 341.274, 0], "h": 1 }], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 115", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 9, "ty": 4, "nm": "Step 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2196.458, 480.637, 0], "to": [13.12, -11.522, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [-13.12, 11.522, 0] }, { "t": 421, "s": [2275.181, 411.504, 0], "h": 1 }], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 114", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 10, "ty": 4, "nm": "Step 0", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 0, "s": [0] }, { "t": 57, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 92, "s": [0] }, { "t": 149, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 186, "s": [0] }, { "t": 243, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 278, "s": [0] }, { "t": 335, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 364, "s": [0] }, { "t": 421, "s": [100], "h": 1 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2090.458, 564.637, 0], "to": [17.667, -14, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 186, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 243, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 278, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [-17.667, 14, 0] }, { "t": 421, "s": [2196.458, 480.637, 0], "h": 1 }], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 114", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 11, "ty": 4, "nm": "Dashed Line", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1124.384, 475.15, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[95.554, 0], [-95.554, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 1, "k": [{ "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 0.711, "s": [71.293] }, { "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 214.59, "s": [22.293] }, { "t": 330.939453125, "s": [71.293] }], "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 11.147, "ix": 2 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Dashed Line", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 12, "ty": 4, "nm": "Line 105", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1137.331, 248.46, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-17.609, 0], [17.609, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 105", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 13, "ty": 4, "nm": "Line 99", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [723.521, 478.708, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-16.314, 0], [16.314, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 99", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 14, "ty": 4, "nm": "Line 104", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1460.508, 479.903, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-15.537, 0], [15.537, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 104", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 21, "ty": 4, "nm": "Line 96", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2685.884, 144.85, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[54.899, 0], [-54.899, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 96", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 22, "ty": 4, "nm": "Line 98", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2303.148, 137.628, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-23.047, 0], [23.047, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 98", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 41, "ty": 4, "nm": "Dashed Line", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1997.063, 319.876, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[84.641, 0], [-84.641, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 11.147, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 1, "k": [{ "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": -1, "s": [22.293] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 182.08, "s": [71.293] }, { "t": 449, "s": [22.293] }], "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 11.147, "ix": 2 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 52.605, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Dashed Line", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 42, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1834.439, 166.796, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, -16.04]], "o": [[16.993, 0], [0, 0]], "v": [[-15.363, -14.501], [15.363, 14.501]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 46, "ty": 4, "nm": "Pattern/Main", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [1388, 248], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.547, 1.211], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Pattern/Main", "np": 1, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  autoplay: true,
  loop: true
})

var animation1 = bodymovin.loadAnimation({
  container: document.getElementById('lottie1'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-a.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Answer 1 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [12.43, 113.367, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 1, "op": 60, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Answer 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1345, -134.5], [-1026.5, -135], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [100] }, { "t": 60, "s": [0] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.68235296011, 0.796078443527, 0.980392158031, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Marker 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [12.43, 113.367, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.68235296011, 0.796078443527, 0.980392158031, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": -35, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('lottie2'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-b.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 5, "ty": 4, "nm": "Answer 2 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [92.104, 210.651, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[10.55, -7.313], [-10.55, -10.55], [-7.313, 10.55]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.203921571374, 0.658823549747, 0.32549020648, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": -45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 2", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 1, "op": 60, "st": 14, "bm": 0 }, { "ddd": 0, "ind": 6, "ty": 4, "nm": "Answer 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1265.5, -34.927], [-1027, -34.964], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [100] }, { "t": 60, "s": [0] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.807843148708, 0.917647063732, 0.839215695858, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "Marker 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [92.104, 210.651, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[10.55, -7.313], [-10.55, -10.55], [-7.313, 10.55]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.505882382393, 0.78823530674, 0.584313750267, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": -45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 2", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('lottie3'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-c.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 9, "ty": 4, "nm": "Answer 3 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [219.594, 327.782, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.984313726425, 0.737254917622, 0.019607843831, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 3", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 1, "op": 60, "st": -428, "bm": 0 }, { "ddd": 0, "ind": 10, "ty": 4, "nm": "Answer 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1141, 80.114], [-1026.5, 80.078], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [100] }, { "t": 60, "s": [0] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.996078431606, 0.937254905701, 0.764705896378, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 11, "ty": 4, "nm": "Marker 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [219.594, 327.782, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.992156863213, 0.886274516582, 0.57647061348, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 3", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation4 = bodymovin.loadAnimation({
  container: document.getElementById('lottie4'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-d.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 1", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 13, "ty": 4, "nm": "Answer 4 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [266.782, 435.048, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 4", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 1, "op": 60, "st": -437, "bm": 0 }, { "ddd": 0, "ind": 14, "ty": 4, "nm": "Answer 4", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1091, 186.306], [-1026.5, 186.117], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [100] }, { "t": 60, "s": [0] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.980392158031, 0.823529422283, 0.811764717102, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 15, "ty": 4, "nm": "Marker 4", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [266.782, 435.048, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.964705884457, 0.68235296011, 0.662745118141, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 4", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation5 = bodymovin.loadAnimation({
  container: document.getElementById('lottie5'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-2.json',
  animationData: { "v": "5.7.4", "fr": 60, "ip": 0, "op": 120, "w": 2776, "h": 600, "nm": "Question 2", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 7, "ty": 4, "nm": "Vector 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [479.585, 273.239, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[6.733, -7.133], [-6.733, -7.133], [-6.733, 7.133], [6.733, 7.133]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0.984313726425, 0.737254917622, 0.015686275437, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.984313726425, 0.737254917622, 0.015686275437, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 60, "s": [0.992156863213, 0.886274516582, 0.57647061348, 1] }, { "t": 90, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 8, "ty": 4, "nm": "Question 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [569.702, 396.142, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 60, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -14.341], [-45.254, 2.92], [-45.058, 40.602], [-6.871, 40.531], [45.058, 40.602]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 90, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.058, -40.602], [-45.237, -34.292], [-45.254, 2.92], [-7.534, 3.068], [-7.375, 40.531], [45.058, 40.602]], "c": false }] }, { "t": 120, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-45.09, -40.415], [-45.795, 13.591], [40.388, 14.392], [3.295, -49.679], [-46.914, 38.977], [45.562, 40.602]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [5] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [18.602] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 90, "s": [40] }, { "t": 120, "s": [50] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [1, 1, 1, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [1, 1, 1, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [0.992156863213, 0.839215695858, 0.388235300779, 1] }, { "t": 120, "s": [0.976470589638, 0.670588254929, 0, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.699, 0.758], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [198.54, 200.487], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q1 - 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 121, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation6 = bodymovin.loadAnimation({
  container: document.getElementById('lottie6'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-3.json',
  animationData: { "v": "5.7.4", "fr": 60, "ip": 0, "op": 90, "w": 2776, "h": 600, "nm": "Question 3", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 2, "ty": 4, "nm": "Q3 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [789.296, 477.345, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [14.502, 15.363], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "t": 60, "s": [0.807843148708, 0.917647063732, 0.839215695858, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 94", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Q2 - 03", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [956.063, 361.575, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0.167 }, "t": 0, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.913], [63.026, -56.95], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-62.882, 56.908], [-65.257, 56.913]], "c": false }] }, { "t": 30, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [62.401, -56.762], [60.715, -56.808], [23.364, -57.094], [23.785, -1.44], [-24.781, -1.759], [-24.444, 56.845], [-65.257, 56.788]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [10] }, { "t": 90, "s": [0] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0.076, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.807843148708, 0.917647063732, 0.839215695858, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 60, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "t": 90, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.576, 0.641], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q2 - 03", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "Q2 - 04", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [956.063, 361.575, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 31, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.975], [23.497, -56.975], [23.497, -1.487], [-25.002, -1.487], [-25.002, 56.756], [-61.594, 56.881], [-63.156, 56.782], [-65.257, 56.788]], "c": false }] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 60, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }] }, { "t": 188.924, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 306.984, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [22.247, -56.788], [22.247, -1.487], [-25.002, -1.487], [-25.002, 56.788], [-45.031, 56.788], [-45.031, 56.969], [-65.257, 56.788]], "c": false }] }, { "t": 334.361328125, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 31, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [10] }, { "t": 90, "s": [0] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 31, "s": [0.807843148708, 0.917647063732, 0.839215695858, 1] }, { "i": { "x": [0.667], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [0.35686275363, 0.72549021244, 0.454901963472, 1] }, { "t": 90, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.576, 0.641], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q2 - 03", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 0, "ix": 1 }, "ix": 1, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 31, "op": 463, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation7 = bodymovin.loadAnimation({
  container: document.getElementById('lottie7'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-4.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE ", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 211, "w": 2776, "h": 600, "nm": "Question 4", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Ellipse 93", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 60, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 90, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 150, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 180, "s": [100] }, { "t": 210, "s": [20] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [1396.287, 477.345, 0], "to": [-26.667, -31.167, 0], "ti": [14.333, 18.333, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 30, "s": [1236.287, 290.345, 0], "to": [-14.333, -18.333, 0], "ti": [-12.333, -12.833, 0] }, { "i": { "x": 0, "y": 0 }, "o": { "x": 0.167, "y": 0.167 }, "t": 60, "s": [1310.287, 367.345, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 90, "s": [1310.287, 367.345, 0], "to": [14.333, 18.333, 0], "ti": [0, 0, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [1396.287, 477.345, 0], "to": [0, 0, 0], "ti": [26.667, 31.167, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 150, "s": [1310.287, 367.345, 0], "to": [-26.667, -31.167, 0], "ti": [-14.333, -18.333, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 180, "s": [1236.287, 290.345, 0], "to": [14.333, 18.333, 0], "ti": [-26.667, -31.167, 0] }, { "t": 210, "s": [1396.287, 477.345, 0] }], "ix": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [108.045, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [481.058, 456.922, 100] }, { "i": { "x": [0, 0, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 60, "s": [338.049, 338.049, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 90, "s": [338.049, 338.049, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [108.045, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 150, "s": [338.049, 338.049, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 180, "s": [481.058, 456.922, 100] }, { "t": 210, "s": [108.045, 100, 100] }], "ix": 6, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [12.43, 13.168], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 93", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 213, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Triangle", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 90, "s": [50] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 180, "s": [20] }, { "t": 210, "s": [100] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [1241.431, 286.956, 0], "to": [26.167, 31.333, 0], "ti": [-26.167, -31.333, 0] }, { "i": { "x": 0, "y": 0 }, "o": { "x": 0.333, "y": 0.333 }, "t": 30, "s": [1398.431, 474.956, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 60, "s": [1398.431, 474.956, 0], "to": [-5.417, -6.375, 0], "ti": [14.905, 18.159, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 90, "s": [1365.931, 436.706, 0], "to": [-14.905, -18.159, 0], "ti": [-5.417, -6.375, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [1309, 366, 0], "to": [5.417, 6.375, 0], "ti": [-14.905, -18.159, 0] }, { "i": { "x": 0, "y": 0 }, "o": { "x": 0.333, "y": 0.333 }, "t": 150, "s": [1398.431, 474.956, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 180, "s": [1398.431, 474.956, 0], "to": [-26.167, -31.333, 0], "ti": [26.167, 31.333, 0] }, { "t": 210, "s": [1241.431, 286.956, 0] }], "ix": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [137.016, 137.016, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [25.016, 25.016, 100] }, { "i": { "x": [0, 0, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [25.016, 25.016, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 90, "s": [40, 40, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [68, 68, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [25.016, 25.016, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 180, "s": [25.016, 25.016, 100] }, { "t": 210, "s": [100, 100, 100] }], "ix": 6, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "ef": [{ "ty": 5, "nm": "Excite - Scale", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 1, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Position", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 2, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Opacity", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 3, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }], "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-26.672, 28.805], [-26.672, -28.805], [26.672, 28.805]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 45", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 213, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Pill", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [50] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [50] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 90, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [50] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 180, "s": [50] }, { "t": 210, "s": [80] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [1294.776, 381.876, 0], "to": [11.167, 9.333, 0], "ti": [-11.167, -9.333, 0] }, { "i": { "x": 0, "y": 0 }, "o": { "x": 0.333, "y": 0.333 }, "t": 30, "s": [1361.776, 437.876, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 60, "s": [1361.776, 437.876, 0], "to": [-20.796, -23.979, 0], "ti": [20.796, 23.979, 0] }, { "i": { "x": 0, "y": 0 }, "o": { "x": 0.333, "y": 0.333 }, "t": 90, "s": [1237, 294, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [1237, 294, 0], "to": [20.796, 23.979, 0], "ti": [-20.796, -23.979, 0] }, { "i": { "x": 0, "y": 0 }, "o": { "x": 0.333, "y": 0.333 }, "t": 150, "s": [1361.776, 437.876, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 180, "s": [1361.776, 437.876, 0], "to": [-11.167, -9.333, 0], "ti": [11.167, 9.333, 0] }, { "t": 210, "s": [1294.776, 381.876, 0] }], "ix": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [-48.514, -48.514, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [66.426, 66.426, 100] }, { "i": { "x": [0, 0, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [66.426, 66.426, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 90, "s": [136.426, 136.426, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [136.426, 136.426, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [66.426, 66.426, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 180, "s": [66.426, 66.426, 100] }, { "t": 210, "s": [100, 100, 100] }], "ix": 6, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[22.788, -10.425], [-22.788, -10.425], [-22.788, 10.425], [22.788, 10.425]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 10.425, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 46", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 213, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "Square", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [50] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 90, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [50] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 180, "s": [80] }, { "t": 210, "s": [50] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 0, "s": [1356.925, 434, 0], "to": [-7.833, -9.167, 0], "ti": [20.5, 26.333, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 30, "s": [1309.925, 379, 0], "to": [-20.5, -26.333, 0], "ti": [-13.542, -16.792, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 60, "s": [1233.925, 276, 0], "to": [13.542, 16.792, 0], "ti": [-20.5, -26.333, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 90, "s": [1391.175, 479.75, 0], "to": [20.5, 26.333, 0], "ti": [26.208, 33.958, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [1356.925, 434, 0], "to": [-26.208, -33.958, 0], "ti": [7.833, 9.167, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 150, "s": [1233.925, 276, 0], "to": [-7.833, -9.167, 0], "ti": [-20.5, -26.333, 0] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 180, "s": [1309.925, 379, 0], "to": [20.5, 26.333, 0], "ti": [-7.833, -9.167, 0] }, { "t": 210, "s": [1356.925, 434, 0] }], "ix": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [144.453, 144.453, 100] }, { "i": { "x": [0, 0, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [197.797, 197.797, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 90, "s": [40, 40, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [197.797, 197.797, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 180, "s": [144.453, 144.453, 100] }, { "t": 210, "s": [100, 100, 100] }], "ix": 6, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "ef": [{ "ty": 5, "nm": "Excite - Scale", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 1, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Position", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 2, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Opacity", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 3, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }], "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [21.752, 22.496], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 44", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 213, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation8 = bodymovin.loadAnimation({
  container: document.getElementById('lottie8'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-a.json',
  animationData: { "v": "5.7.4", "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 5", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 11, "ty": 4, "nm": "Vector 5", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [100] }, { "t": 30, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1681.137, 349.504, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-64.469, -61.113], [64.469, -61.113], [63.92, 61.113]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0] }, { "t": 60, "s": [68] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.541176497936, 0.705882370472, 0.972549021244, 1] }, { "t": 60, "s": [0.258823543787, 0.521568655968, 0.956862747669, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 12, "ty": 4, "nm": "Q4 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1528.479, 479.116, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[4.508, -4.508], [-4.508, -4.508], [-4.508, 4.508], [4.508, 4.508]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0.258823543787, 0.521568655968, 0.956862747669, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.258823543787, 0.521568655968, 0.956862747669, 1] }, { "t": 60, "s": [0.823529422283, 0.890196084976, 0.988235294819, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.411, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q4 Mini", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation9 = bodymovin.loadAnimation({
  container: document.getElementById('lottie9'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-b.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 5", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 10, "ty": 4, "nm": "Vector 4", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "t": 30, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1652.652, 319.327, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-49.381, -46.871], [49.381, -46.871], [48.96, 46.871]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.541176497936, 0.705882370472, 0.972549021244, 1] }, { "t": 60, "s": [0.258823543787, 0.521568655968, 0.956862747669, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0] }, { "t": 60, "s": [50] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation10 = bodymovin.loadAnimation({
  container: document.getElementById('lottie10'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-c.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 5", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 9, "ty": 4, "nm": "Vector 3", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "t": 30, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1623.131, 289.15, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-34.292, -32.628], [34.292, -32.628], [34, 32.628]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.541176497936, 0.705882370472, 0.972549021244, 1] }, { "t": 60, "s": [0.258823543787, 0.521568655968, 0.956862747669, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0] }, { "t": 60, "s": [38] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation11 = bodymovin.loadAnimation({
  container: document.getElementById('lottie11'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-d.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 5", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 8, "ty": 4, "nm": "Vector 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "t": 30, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1593.093, 257.327, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-18.381, -17.609], [18.381, -17.609], [18.224, 17.609]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.541176497936, 0.705882370472, 0.972549021244, 1] }, { "t": 60, "s": [0.258823543787, 0.521568655968, 0.956862747669, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0] }, { "t": 60, "s": [20] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation12 = bodymovin.loadAnimation({
  container: document.getElementById('lottie12'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-e.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE 1.0.0", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 60, "w": 2776, "h": 600, "nm": "Question 5", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 7, "ty": 4, "nm": "Vector 1", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0] }, { "t": 30, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1566.679, 229.894, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-4.115, -3.884], [4.115, -3.884], [4.08, 3.884]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.541176497936, 0.705882370472, 0.972549021244, 1] }, { "t": 60, "s": [0.258823543787, 0.521568655968, 0.956862747669, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0] }, { "t": 60, "s": [5] }], "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 61, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation13 = bodymovin.loadAnimation({
  container: document.getElementById('lottie13'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-6.json',
  animationData: { "v": "5.7.4", "fr": 60, "ip": 0, "op": 90, "w": 2776, "h": 600, "nm": "Question 6", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 6, "ty": 4, "nm": "Q5 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1895.857, 134.982, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[4.85, -4.728], [-4.85, -3.274], [3.152, 4.728]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [0.984313726425, 0.737254917622, 0.015686275437, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.992156863213, 0.839215695858, 0.388235300779, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 60, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }, { "t": 90, "s": [0.996078431606, 0.96862745285, 0.878431379795, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.285, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q5 Mini", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "Question 6", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2084.072, 182.708, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 0, "s": [{ "i": [[0, 0], [4.694, 0.004], [9.386, 0], [4.649, -0.004], [9.462, 0], [4.739, -0.012], [9.28, 0], [4.673, 0.012], [9.411, 0]], "o": [[-9.421, 0], [-4.677, -0.004], [-9.312, 0], [-4.74, 0.004], [-9.495, 0], [-4.648, 0.012], [-9.363, 0], [-4.714, -0.012], [0, 0]], "v": [[75.097, -23.867], [56.297, -23.875], [37.549, -23.883], [18.886, -23.875], [0, -23.867], [-18.936, -23.843], [-37.549, -23.82], [-56.286, -23.844], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 30, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, -12.308], [37.549, -0.758], [18.886, -12.028], [0, -23.867], [-18.936, -11.902], [-37.549, -0.758], [-56.286, -12.095], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 60, "s": [{ "i": [[0, 0], [4.694, -11.956], [9.386, 0], [4.649, 11.817], [9.462, 0], [4.739, -12.048], [9.28, 0], [4.673, 11.882], [9.411, 0]], "o": [[-9.421, 0], [-4.677, 11.911], [-9.312, 0], [-4.74, -12.048], [-9.495, 0], [-4.648, 11.817], [-9.363, 0], [-4.714, -11.985], [0, 0]], "v": [[75.097, -23.867], [56.297, 0.067], [37.549, 23.867], [18.886, 0.347], [0, -23.867], [-18.936, 0.348], [-37.549, 23.867], [-56.286, 0.155], [-75.097, -23.867]], "c": false }] }, { "t": 90, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.574, 0.242], [18.842, -23.692], [0.036, 0.258], [-18.949, -23.727], [-37.493, 0.117], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 0, "s": [1, 1, 1, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 30, "s": [0.996078431606, 0.937254905701, 0.764705896378, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 60, "s": [0.992156863213, 0.839215695858, 0.388235300779, 1] }, { "t": 90, "s": [0.984313726425, 0.737254917622, 0.015686275437, 1] }], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [1.043, 0.93], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q5 - 3", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 94, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation14 = bodymovin.loadAnimation({
  container: document.getElementById('lottie14'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-7.json',
  animationData: { "v": "4.8.0", "meta": { "g": "LottieFiles AE ", "a": "", "k": "", "d": "", "tc": "" }, "fr": 60, "ip": 0, "op": 180, "w": 2776, "h": 600, "nm": "Question 7", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Q6 Poly 6", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [100] }, { "t": 180, "s": [30] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.087, 143.752, 0], "ix": 2 }, "a": { "a": 0, "k": [-83.901, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [-93.445, -93.445, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [-14.185, -14.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [-14.185, -14.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 90, "s": [-48.185, -48.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [-14.185, -14.185, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [-14.185, -14.185, 100] }, { "t": 180, "s": [-93.445, -93.445, 100] }], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[71.876, -7.016], [0, -41.951], [-71.876, -7.016], [-71.876, 41.951], [71.876, 41.951]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "t": 180, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 182, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Q6 - TRiangle 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [30] }, { "t": 180, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2575.424, 142.382, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [622.77, 622.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [622.77, 622.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 90, "s": [622.77, 622.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [362.77, 362.77, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [622.77, 622.77, 100] }, { "t": 180, "s": [100, 100, 100] }], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-7.916, 7.916], [-7.916, -7.916], [7.916, 7.916]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "t": 180, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 45.095, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 55", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 0, "k": [0.716733038425, 0.933333337307, 0.360784322023, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 182, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Q6 Circle 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [60] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [60] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [100] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [60] }, { "t": 180, "s": [60] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.087, 145.398, 0], "ix": 2 }, "a": { "a": 0, "k": [27.449, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [171.541, 171.541, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 90, "s": [43.541, 43.541, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [230, 230, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [100, 100, 100] }, { "t": 180, "s": [100, 100, 100] }], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, -16.212], [-15.16, 0], [0, 0]], "o": [[0, 16.212], [0, 0], [-15.16, 0]], "v": [[-13.725, 0], [13.725, 29.354], [13.725, -29.354]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 96", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "t": 180, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 182, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "Q6 Poly 5", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [40] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [20] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [40] }, { "t": 180, "s": [40] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.087, 144.252, 0], "ix": 2 }, "a": { "a": 0, "k": [40.397, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [90.095, 90.095, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 90, "s": [141.095, 141.095, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [108, 108, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [100, 100, 100] }, { "t": 180, "s": [100, 100, 100] }], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-20.198, -25.239], [20.198, -50.478], [20.198, 50.478], [-20.198, 25.239]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 2", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "t": 180, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 182, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "Q6 Rectangle 57", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [80] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [30] }, { "i": { "x": [0], "y": [-6.081] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [30] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [30] }, { "t": 180, "s": [30] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2576.086, 144.239, 0], "ix": 2 }, "a": { "a": 0, "k": [50.755, 0, 0], "ix": 1 }, "s": { "a": 1, "k": [{ "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 0, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 30, "s": [100, 100, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 60, "s": [45.818, 45.818, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 90, "s": [80.818, 80.818, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 120, "s": [87, 87, 100] }, { "i": { "x": [0, 0, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.333, 0.333, 0.333], "y": [0, 0, 0] }, "t": 150, "s": [100, 100, 100] }, { "t": 180, "s": [100, 100, 100] }], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [50.755, 111.929], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 56", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 0, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 30, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 60, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 90, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 120, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }, { "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 150, "s": [0.933333333333, 0.403921568627, 0.360784313725, 1] }, { "t": 180, "s": [0.850980401039, 0.188235297799, 0.145098045468, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 182, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 6, "ty": 4, "nm": "Q7 Marker", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2377.609, 143.109, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [12.742, 12.742], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.964705884457, 0.68235296011, 0.662745118141, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.348, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 50", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation15 = bodymovin.loadAnimation({
  container: document.getElementById('lottie15'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-grid-lines.json',
  animationData: { "v": "5.7.4", "fr": 60, "ip": 0, "op": 211, "w": 2776, "h": 600, "nm": "Grid Lines", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Shape Layer 29", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 90, "s": [2034.438, 154.25, 0], "to": [0, 7.5, 0], "ti": [0, -15.833, 0] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [2034.438, 199.25, 0], "to": [0, 15.833, 0], "ti": [0, -0.333, 0] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 150, "s": [2034.438, 249.25, 0], "to": [0, 0.333, 0], "ti": [0, 8, 0] }, { "t": 180, "s": [2034.438, 201.25, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -57.812], [-972, 267.25]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 90, "op": 211, "st": 90, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Shape Layer 14", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2034.438, 119.25, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -57.812], [-972, 267.25]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 90, "op": 211, "st": 90, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Shape Layer 28", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [1933.938, 135, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-238, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 90, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 206.312], [-972, 267.25]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 162.562], [-972, 267.25]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 150, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 111.938], [-972, 267.25]], "c": false }] }, { "t": 180, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 159.438], [-972, 267.25]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 90, "op": 211, "st": 90, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "Shape Layer 27", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [2235, 135, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-238, -971.312, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 90, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 206.312], [-972, 267.25]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 161.938], [-972, 267.25]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 150, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 111.938], [-972, 267.25]], "c": false }] }, { "t": 180, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 160.062], [-972, 267.25]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 90, "op": 211, "st": 90, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "Shape Layer 26", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [2085, 135, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-238, -971.312, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 90, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 206.312], [-972, 267.25]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 120, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 162.562], [-972, 267.25]], "c": false }] }, { "i": { "x": 0.667, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 150, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 111.938], [-972, 267.25]], "c": false }] }, { "t": 180, "s": [{ "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-971.75, 159.438], [-972, 267.25]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 90, "op": 211, "st": 90, "bm": 0 }, { "ddd": 0, "ind": 6, "ty": 4, "nm": "Shape Layer 25", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [1557.688, 318.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -31.938], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 60, "op": 91, "st": 60, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "Shape Layer 24", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [1819.688, 318.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -31.938], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 60, "op": 91, "st": 60, "bm": 0 }, { "ddd": 0, "ind": 8, "ty": 4, "nm": "Shape Layer 23", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [1785.688, 318.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -31.938], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 60, "op": 91, "st": 60, "bm": 0 }, { "ddd": 0, "ind": 9, "ty": 4, "nm": "Shape Layer 22", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1656.938, 221.25, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -20.938], [-972, 267.25]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 60, "op": 91, "st": 60, "bm": 0 }, { "ddd": 0, "ind": 10, "ty": 4, "nm": "Shape Layer 21", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1656.938, 495.25, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -20.938], [-972, 267.25]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 60, "op": 91, "st": 60, "bm": 0 }, { "ddd": 0, "ind": 11, "ty": 4, "nm": "Shape Layer 20", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1656.938, 462.25, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -20.938], [-972, 267.25]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 60, "op": 91, "st": 60, "bm": 0 }, { "ddd": 0, "ind": 12, "ty": 4, "nm": "Shape Layer 19", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1080.438, 1465.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -19.875], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 13, "ty": 4, "nm": "Shape Layer 18", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1080.438, 1430.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, 143.375], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 14, "ty": 4, "nm": "Shape Layer 10", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1080.438, 1347.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, 47], [-972, 201.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 15, "ty": 4, "nm": "Shape Layer 11", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1080.438, 1314.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, 47], [-972, 201.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 16, "ty": 4, "nm": "Shape Layer 9", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1080.438, 1203.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -19.875], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 17, "ty": 4, "nm": "Shape Layer 17", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1080.438, 1237.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -19.875], [-972, 106.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 18, "ty": 4, "nm": "Shape Layer 7", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [1086.688, 330.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -22.062], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 19, "ty": 4, "nm": "Shape Layer 12", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [1019.688, 330.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, 98.562], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 20, "ty": 4, "nm": "Shape Layer 13", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [985.688, 330.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, 98.562], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 21, "ty": 4, "nm": "Shape Layer 15", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [889.688, 440, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, 89.812], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 22, "ty": 4, "nm": "Shape Layer 16", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [923.688, 440, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, 89.812], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 2", "np": 1, "cix": 2, "bm": 0, "ix": 3, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 23, "ty": 4, "nm": "Shape Layer 8", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 90, "ix": 10 }, "p": { "a": 0, "k": [824.688, 330.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-156.25, -971.25, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972, -22.062], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.501960813999, 0.219607844949, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 30, "op": 61, "st": 30, "bm": 0 }, { "ddd": 0, "ind": 24, "ty": 4, "nm": "Shape Layer 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1632.5, 240, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-972, 209.25], [-972, 238.5], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 25, "ty": 4, "nm": "Shape Layer 5", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [718.938, 1287.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-972.25, 209.625], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 26, "ty": 4, "nm": "Shape Layer 6", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [718.938, 1466.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-972, 46.625], [-972, 161.75], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 27, "ty": 4, "nm": "Shape Layer 4", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [718.938, 1433.5, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-972, 46.625], [-972, 161.75], [-972, 266.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 28, "ty": 4, "nm": "Shape Layer 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1469.5, 240, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-972, 64.125], [-972, 104.25], [-972, 261.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 29, "ty": 4, "nm": "Shape Layer 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1435.5, 240, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-972, 64.125], [-972, 104.25], [-972, 261.75]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.917647063732, 0.525490224361, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 1, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation16 = bodymovin.loadAnimation({
  container: document.getElementById('lottie16'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-pattern-outro-01.json',
  animationData: { "v": "5.7.8", "fr": 60, "ip": 0, "op": 450, "w": 2776, "h": 600, "nm": "Pattern Outro [Lottie]", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Pulse", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 54, "s": [0] }, { "t": 75, "s": [25] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 54, "s": [347.742, 270.191, 0], "to": [22, 1.5, 0], "ti": [-22.167, -18.167, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 101, "s": [479.742, 279.191, 0], "to": [22.167, 18.167, 0], "ti": [-18.167, -16.468, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 113, "s": [480.742, 379.191, 0], "to": [18.167, 16.468, 0], "ti": [-15.824, -62.391, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 124, "s": [588.742, 378, 0], "to": [17.255, 68.032, 0], "ti": [-33.333, -16.667, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 137, "s": [508.742, 478, 0], "to": [33.333, 16.667, 0], "ti": [-66.667, 1.667, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 157, "s": [788.742, 478, 0], "to": [66.667, -1.667, 0], "ti": [-20, 20, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 173, "s": [908.742, 468, 0], "to": [20, -20, 0], "ti": [-16.667, 18.333, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 178, "s": [908.742, 358, 0], "to": [16.667, -18.333, 0], "ti": [-18.667, 18.833, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 182, "s": [1008.742, 358, 0], "to": [18.667, -18.833, 0], "ti": [-24.667, 18.333, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 188, "s": [1020.742, 245, 0], "to": [24.667, -18.333, 0], "ti": [-35.833, -7.167, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 195, "s": [1156.742, 248, 0], "to": [35.833, 7.167, 0], "ti": [-45.833, -39, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 204, "s": [1235.742, 288, 0], "to": [45.833, 39, 0], "ti": [-58.872, 2.777, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 217, "s": [1431.742, 482, 0], "to": [180.167, -8.5, 0], "ti": [16.546, 324.581, 0] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 236, "s": [1806.742, 223, 0], "to": [-3.683, -72.242, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.913, "y": 0 }, "o": { "x": 0.366, "y": 0 }, "t": 243, "s": [1854.742, 135, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.628, "y": 0.999 }, "o": { "x": 0.19, "y": 1 }, "t": 247, "s": [1905.467, 135.548, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.692, "y": 0.571 }, "o": { "x": 0.319, "y": 0.001 }, "t": 251, "s": [2008.617, 176.774, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.79, "y": 0 }, "o": { "x": 0.419, "y": 0.375 }, "t": 254, "s": [2043.818, 137.032, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.871, "y": 0 }, "o": { "x": 0.152, "y": 1 }, "t": 256, "s": [2080.768, 178, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.794, "y": 0 }, "o": { "x": 0.124, "y": 1 }, "t": 259, "s": [2122.577, 135.075, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.772, "y": 0 }, "o": { "x": 0.174, "y": 1 }, "t": 262, "s": [2163.738, 175.042, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.601, "y": 1 }, "o": { "x": 0.273, "y": 0.489 }, "t": 265, "s": [2193.859, 137.273, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.566, "y": 0.485 }, "o": { "x": 0.202, "y": 0 }, "t": 270, "s": [2390.742, 141, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "i": { "x": 0.66, "y": 1 }, "o": { "x": 0.305, "y": 0.432 }, "t": 289, "s": [2555.789, 141.5, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 313, "s": [2730.742, 142, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-989.258, 24.191, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.3, 0.3, 0.3], "y": [1, 1, 1] }, "o": { "x": [0.7, 0.7, 0.7], "y": [0, 0, 0] }, "t": 54, "s": [166.667, 166.667, 100] }, { "i": { "x": [0.3, 0.3, 0.3], "y": [1, 1, 1] }, "o": { "x": [0.7, 0.7, 0.7], "y": [0, 0, 0] }, "t": 75, "s": [100, 100, 100] }, { "i": { "x": [0.691, 0.691, 0.691], "y": [1, 1, 1] }, "o": { "x": [0.358, 0.358, 0.358], "y": [0, 0, 0] }, "t": 93, "s": [100, 100, 100] }, { "i": { "x": [0.714, 0.714, 0.714], "y": [0.965, 0.965, -0.112] }, "o": { "x": [0.385, 0.385, 0.385], "y": [0, 0, 0] }, "t": 101, "s": [24.691, 24.691, 100] }, { "i": { "x": [0.216, 0.216, 0.216], "y": [1, 1, 1] }, "o": { "x": [0.502, 0.502, 0.502], "y": [0.093, 0.093, 4.07] }, "t": 113, "s": [56.044, 56.044, 100] }, { "i": { "x": [0.884, 0.884, 0.884], "y": [1, 1, 1] }, "o": { "x": [0.707, 0.707, 0.707], "y": [0, 0, 0] }, "t": 138, "s": [100, 100, 100] }, { "i": { "x": [0.884, 0.884, 0.884], "y": [1, 1, 1] }, "o": { "x": [0.131, 0.131, 0.131], "y": [0, 0, 0] }, "t": 154, "s": [18.519, 18.519, 100] }, { "i": { "x": [0.173, 0.173, 0.173], "y": [1, 1, 1] }, "o": { "x": [0.131, 0.131, 0.131], "y": [0, 0, 0] }, "t": 173, "s": [70.37, 70.37, 100] }, { "i": { "x": [0.216, 0.216, 0.216], "y": [1, 1, 1] }, "o": { "x": [0.754, 0.754, 0.754], "y": [0, 0, 0] }, "t": 178, "s": [100, 100, 100] }, { "i": { "x": [0.414, 0.414, 0.414], "y": [1, 1, 1] }, "o": { "x": [0.754, 0.754, 0.754], "y": [0, 0, 0] }, "t": 188, "s": [100, 100, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.293, 0.293, 0.293], "y": [0, 0, 0] }, "t": 195, "s": [74.074, 74.074, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 204, "s": [116.049, 116.049, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 217, "s": [74.074, 74.074, 100] }, { "i": { "x": [0.563, 0.563, 0.563], "y": [1, 1, 1] }, "o": { "x": [0.199, 0.199, 0.199], "y": [0, 0, 0] }, "t": 238, "s": [74.074, 74.074, 100] }, { "i": { "x": [0.651, 0.651, 0.651], "y": [0.96, 0.96, -3.539] }, "o": { "x": [0.309, 0.309, 0.309], "y": [0, 0, 0] }, "t": 249, "s": [27.16, 27.16, 100] }, { "i": { "x": [0.837, 0.837, 0.837], "y": [1, 1, 1] }, "o": { "x": [0.406, 0.406, 0.406], "y": [-0.228, -0.228, 16.873] }, "t": 254, "s": [91.591, 91.591, 100] }, { "i": { "x": [0.833, 0.833, 0.833], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0, 0, 0] }, "t": 270, "s": [49.383, 49.383, 100] }, { "t": 313, "s": [49.383, 49.383, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[44.735, 0], [0, -44.735], [-44.735, 0], [0, 44.735]], "o": [[-44.735, 0], [0, 44.735], [44.735, 0], [0, -44.735]], "v": [[0, -81], [-81, 0], [0, 81], [81, 0]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 136, "s": [0.976470648074, 0.670588235294, 0, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 157, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 187, "s": [0.203921571374, 0.658823549747, 0.32549020648, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 195, "s": [0.850980451995, 0.188235309077, 0.145098039216, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 214, "s": [0.850980451995, 0.188235309077, 0.145098039216, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 223, "s": [0.098039223166, 0.403921598547, 0.823529471603, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 232, "s": [0.098039223166, 0.403921598547, 0.823529471603, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 239, "s": [0.976470648074, 0.670588235294, 0, 1] }, { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 278, "s": [0.976470648074, 0.670588235294, 0, 1] }, { "t": 296, "s": [0.258823529412, 0.521568627451, 0.956862804936, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-989.258, 24.191], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Answer 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1091, 186.306], [-1026.5, 186.117], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 65, "s": [0] }, { "t": 120, "s": [100] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.964705942191, 0.682352941176, 0.662745098039, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 456, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Answer 4", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1141, 80.114], [-1026.5, 80.078], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 58, "s": [0] }, { "t": 110, "s": [100] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.996078431373, 0.937254901961, 0.764705882353, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 458, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "Answer 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1265.5, -34.927], [-1027, -34.964], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 48, "s": [0] }, { "t": 98, "s": [100] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.807843137255, 0.917647058824, 0.839215686275, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 458, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "Q6 Poly 6", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 282, "s": [0] }, { "t": 299, "s": [180] }], "ix": 10 }, "p": { "a": 0, "k": [2576.087, 143.752, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-83.901, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-14.185, -14.185, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[71.876, -7.016], [0, -41.951], [-71.876, -7.016], [-71.876, 41.951], [71.876, 41.951]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.933333333333, 0.403921568627, 0.360784313725, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 474, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 6, "ty": 4, "nm": "Q6 Circle 2", "sr": 1, "ks": { "o": { "a": 0, "k": 60, "ix": 11 }, "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 275, "s": [0] }, { "t": 292, "s": [180] }], "ix": 10 }, "p": { "a": 0, "k": [2576.087, 145.398, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [27.449, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, -16.212], [-15.16, 0], [0, 0]], "o": [[0, 16.212], [0, 0], [-15.16, 0]], "v": [[-13.725, 0], [13.725, 29.354], [13.725, -29.354]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 96", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 0, "k": [0.933333333333, 0.403921568627, 0.360784313725, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 474, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "Q6 Rectangle 57", "sr": 1, "ks": { "o": { "a": 0, "k": 30, "ix": 11 }, "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 273, "s": [0] }, { "t": 290, "s": [180] }], "ix": 10 }, "p": { "a": 0, "k": [2576.086, 144.239, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [50.755, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [50.755, 111.929], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 56", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 0, "k": [0.933333333333, 0.403921568627, 0.360784313725, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 474, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 8, "ty": 4, "nm": "Q6 Poly 5", "sr": 1, "ks": { "o": { "a": 0, "k": 40, "ix": 11 }, "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 269, "s": [0] }, { "t": 284, "s": [180] }], "ix": 10 }, "p": { "a": 0, "k": [2576.087, 144.252, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [40.397, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-20.198, -25.239], [20.198, -50.478], [20.198, 50.478], [-20.198, 25.239]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.917647063732, 0.262745112181, 0.207843139768, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 2", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 0, "k": [0.933333333333, 0.403921568627, 0.360784313725, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 474, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 9, "ty": 4, "nm": "Q6 - TRiangle 2", "sr": 1, "ks": { "o": { "a": 0, "k": 30, "ix": 11 }, "r": { "a": 1, "k": [{ "i": { "x": [0], "y": [1] }, "o": { "x": [1], "y": [0] }, "t": 266, "s": [0] }, { "t": 283, "s": [180] }], "ix": 10 }, "p": { "a": 0, "k": [2575.424, 142.382, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [622.77, 622.77, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-7.916, 7.916], [-7.916, -7.916], [7.916, 7.916]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 45.095, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 55", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "gr", "it": [{ "ty": "fl", "c": { "a": 0, "k": [0.716733038425, 0.933333337307, 0.360784322023, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Group 1", "np": 1, "cix": 2, "bm": 0, "ix": 2, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 474, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 10, "ty": 4, "nm": "Ellipse 93", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 201, "s": [100] }, { "t": 224, "s": [20] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 201, "s": [1236.287, 290.345, 0], "to": [26.333, 31.5, 0], "ti": [-26.333, -31.5, 0] }, { "t": 224, "s": [1394.287, 479.345, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 201, "s": [481.058, 456.922, 100] }, { "t": 224, "s": [143.162, 143.162, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [12.43, 13.168], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 93", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 475, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 11, "ty": 4, "nm": "Triangle", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 201, "s": [20] }, { "t": 224, "s": [30] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 201, "s": [1398.431, 474.956, 0], "to": [-6.667, -8.333, 0], "ti": [6.667, 8.333, 0] }, { "t": 224, "s": [1358.431, 424.956, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 201, "s": [25.016, 25.016, 100] }, { "t": 224, "s": [45.846, 45.846, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "ef": [{ "ty": 5, "nm": "Excite - Scale", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 1, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Position", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 2, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Opacity", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 3, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }], "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-26.672, 28.805], [-26.672, -28.805], [26.672, 28.805]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 45", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 475, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 12, "ty": 4, "nm": "Pill", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 201, "s": [50] }, { "t": 224, "s": [80] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 201, "s": [1361.776, 437.876, 0], "to": [-11.667, -13.333, 0], "ti": [11.667, 13.333, 0] }, { "t": 224, "s": [1291.776, 357.876, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 201, "s": [66.426, 66.426, 100] }, { "t": 224, "s": [114.389, 114.389, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[22.788, -10.425], [-22.788, -10.425], [-22.788, 10.425], [22.788, 10.425]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 10.425, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 46", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 475, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 13, "ty": 4, "nm": "Square", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.333], "y": [0] }, "t": 201, "s": [80] }, { "t": 224, "s": [100] }], "ix": 11, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Opacity')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 0.333, "y": 0 }, "t": 201, "s": [1309.925, 379, 0], "to": [-12.333, -19.251, 0], "ti": [12.333, 19.251, 0] }, { "t": 224, "s": [1235.925, 263.496, 0] }], "ix": 2, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Position')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Position')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.833, 0.833, 0.833], "y": [0.833, 0.833, 0.833] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.167, 0.167, 0.167] }, "t": 201, "s": [144.453, 144.453, 100] }, { "t": 224, "s": [246.695, 246.695, 100] }], "ix": 6, "l": 2, "x": "var $bm_rt;\nvar enable, amp, freq, decay, n, t, v;\ntry {\n    $bm_rt = enable = effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0001');\n    if (enable == 0) {\n        $bm_rt = value;\n    } else {\n        amp = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0003'), 2.5);\n        freq = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0004'), 20);\n        decay = $bm_div(effect('Excite - Scale')('Pseudo/BNCA2506f0b33-0005'), 20);\n        n = 0, 0 < numKeys && (n = nearestKey(time).index, key(n).time > time && n--), t = 0 === n ? 0 : $bm_sub(time, key(n).time), $bm_rt = 0 < n ? (v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10))), $bm_sum(value, $bm_div($bm_mul($bm_mul($bm_div(v, 100), amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))))) : value;\n    }\n} catch (err) {\n    $bm_rt = value = value;\n}" } }, "ao": 0, "ef": [{ "ty": 5, "nm": "Excite - Scale", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 1, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Position", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 2, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }, { "ty": 5, "nm": "Excite - Opacity", "np": 8, "mn": "Pseudo/BNCA2506f0b33", "ix": 3, "en": 1, "ef": [{ "ty": 7, "nm": "Enable", "mn": "Pseudo/BNCA2506f0b33-0001", "ix": 1, "v": { "a": 0, "k": 1, "ix": 1 } }, { "ty": 6, "nm": "Properties", "mn": "Pseudo/BNCA2506f0b33-0002", "ix": 2, "v": 0 }, { "ty": 0, "nm": "Overshoot", "mn": "Pseudo/BNCA2506f0b33-0003", "ix": 3, "v": { "a": 0, "k": 20, "ix": 3, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Bounce", "mn": "Pseudo/BNCA2506f0b33-0004", "ix": 4, "v": { "a": 0, "k": 40, "ix": 4, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 0, "nm": "Friction", "mn": "Pseudo/BNCA2506f0b33-0005", "ix": 5, "v": { "a": 0, "k": 40, "ix": 5, "x": "var $bm_rt;\n$bm_rt = clamp(value, 0, 100);" } }, { "ty": 6, "nm": "", "mn": "Pseudo/BNCA2506f0b33-0006", "ix": 6, "v": 0 }] }], "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [21.752, 22.496], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.850980401039, 0.188235297799, 0.145098045468, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 44", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 475, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 14, "ty": 4, "nm": "Answer 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-1345, -134.5], [-1026.5, -135], [-1026.5, 25.499], [-945, 25.499]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 0, "ix": 1 }, "e": { "a": 0, "k": 100, "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.68235296011, 0.796078443527, 0.980392158031, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 32, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 99.964], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 474, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 15, "ty": 4, "nm": "Question 6", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2084.072, 182.708, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.8, "y": 0 }, "t": 240, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.574, 0.242], [18.842, -23.692], [0.036, 0.258], [-18.949, -23.727], [-37.493, 0.117], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 249, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.588, 0.481], [18.793, -25.127], [0.049, 5.041], [-19.053, -28.573], [-38.5, 33.292], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 251, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.603, 0.756], [18.736, -26.774], [0.064, 10.531], [-19.174, -45.634], [-38.146, 32.147], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.167, "y": 0.167 }, "t": 256, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.627, 1.167], [19.152, -33.742], [0.086, 18.758], [-19.354, -44.241], [-37.617, 30.43], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }, { "t": 261, "s": [{ "i": [[0, 0], [4.538, 0.091], [9.389, 0], [5.122, 0.166], [9.451, 0], [4.496, 0.109], [8.332, 0.029], [4.879, 0.001], [0, 0]], "o": [[-12.133, 0.013], [-4.587, -0.092], [-9.323, 0], [-5.003, -0.162], [-9.475, 0], [-5.212, -0.127], [-9.365, -0.032], [-5.246, -0.001], [0, 0]], "v": [[75.097, -23.867], [56.363, -23.82], [37.631, 1.242], [18.636, -29.692], [0.09, 20.258], [-19.387, -43.987], [-37.52, 30.117], [-56.273, -23.728], [-75.097, -23.867]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.976470589638, 0.670588254929, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [1.117, 1.52], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q5 - 3", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 486, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 16, "ty": 4, "nm": "Step 3", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 0, "s": [100] }, { "t": 57, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 92, "s": [100] }, { "t": 149, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 192, "s": [100] }, { "t": 249, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 284, "s": [100] }, { "t": 335, "s": [0], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 364, "s": [100] }, { "t": 421, "s": [0], "h": 1 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2364.261, 341.274, 0], "to": [13, -13, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 192, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 249, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 284, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2442.261, 263.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2364.261, 341.274, 0], "to": [0, 0, 0], "ti": [-13, 13, 0] }, { "t": 421, "s": [2442.261, 263.274, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 116", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 17, "ty": 4, "nm": "Step 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2275.181, 411.504, 0], "to": [14.847, -11.705, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 192, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 249, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 284, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2364.261, 341.274, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2275.181, 411.504, 0], "to": [0, 0, 0], "ti": [-14.847, 11.705, 0] }, { "t": 421, "s": [2364.261, 341.274, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 115", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 18, "ty": 4, "nm": "Step 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2196.458, 480.637, 0], "to": [13.12, -11.522, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 192, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 249, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 284, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2275.181, 411.504, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2196.458, 480.637, 0], "to": [0, 0, 0], "ti": [-13.12, 11.522, 0] }, { "t": 421, "s": [2275.181, 411.504, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 114", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 19, "ty": 4, "nm": "Step 0", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 0, "s": [0] }, { "t": 57, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 92, "s": [0] }, { "t": 149, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 192, "s": [0] }, { "t": 249, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 284, "s": [0] }, { "t": 335, "s": [100], "h": 1 }, { "i": { "x": [0.16], "y": [1] }, "o": { "x": [0.84], "y": [0] }, "t": 364, "s": [0] }, { "t": 421, "s": [100], "h": 1 }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 0, "s": [2090.458, 564.637, 0], "to": [17.667, -14, 0], "ti": [0, 0, 0] }, { "t": 57, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 92, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 149, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 192, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 249, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 284, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [0, 0, 0] }, { "t": 335, "s": [2196.458, 480.637, 0], "h": 1 }, { "i": { "x": 0.16, "y": 1 }, "o": { "x": 0.84, "y": 0 }, "t": 364, "s": [2090.458, 564.637, 0], "to": [0, 0, 0], "ti": [-17.667, 14, 0] }, { "t": 421, "s": [2196.458, 480.637, 0], "h": 1 }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-30.298, 0], [30.298, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 114", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 20, "ty": 4, "nm": "Marker 4", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.21, "y": 1 }, "o": { "x": 0.79, "y": 0 }, "t": 74, "s": [266.782, 435.048, 0], "to": [5.463, 0, 0], "ti": [-10.313, 0, 0] }, { "t": 87, "s": [316.449, 434.048, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.964705884457, 0.68235296011, 0.662745118141, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 4", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 21, "ty": 4, "nm": "Marker 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.21, "y": 1 }, "o": { "x": 0.79, "y": 0 }, "t": 60, "s": [219.594, 327.782, 0], "to": [9, 0, 0], "ti": [-9, 0, 0] }, { "t": 78, "s": [273.594, 327.782, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.992156863213, 0.886274516582, 0.57647061348, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 3", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 22, "ty": 4, "nm": "Marker 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 52, "s": [92.104, 210.651, 0], "to": [6.667, 0, 0], "ti": [-6.667, 0, 0] }, { "t": 79, "s": [132.104, 210.651, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[10.55, -7.313], [-10.55, -10.55], [-7.313, 10.55]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 66, "s": [0.505882382393, 0.78823530674, 0.584313750267, 1] }, { "t": 86, "s": [0.203921568627, 0.658823529412, 0.325490196078, 1] }], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": -45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 2", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 23, "ty": 4, "nm": "Marker 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.32, "y": 1 }, "o": { "x": 0.68, "y": 0 }, "t": 32, "s": [12.43, 113.367, 0], "to": [8.333, 0, 0], "ti": [-8.333, 0, 0] }, { "t": 55, "s": [62.43, 113.367, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [22, 22], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.258823529412, 0.521568627451, 0.956862745098, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Marker 1", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 24, "ty": 4, "nm": "00", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [242.9, 273.919, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[114.696, -59], [114.696, -155], [-192.5, -155]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 1, "ty": "sh", "ix": 2, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[114.696, 53], [114.696, 155], [52.5, 155]], "c": false }, "ix": 2 }, "nm": "Path 2", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 2, "ty": "sh", "ix": 3, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[192.5, 0], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 3", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 3, "ty": "sh", "ix": 4, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[114.696, -59], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 4", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 4, "ty": "sh", "ix": 5, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[114.696, 53], [114.696, 0]], "c": false }, "ix": 2 }, "nm": "Path 5", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 5, "ty": "sh", "ix": 6, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-116.5, -59], [114.696, -59]], "c": false }, "ix": 2 }, "nm": "Path 6", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ind": 6, "ty": "sh", "ix": 7, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[4.5, 53], [114.696, 53]], "c": false }, "ix": 2 }, "nm": "Path 7", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "mm", "mm": 1, "nm": "Merge Paths 1", "mn": "ADBE Vector Filter - Merge", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 30, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [103.582, 103.582], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "00", "np": 9, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 450, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 25, "ty": 4, "nm": "Dashed Line", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1124.384, 475.15, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[95.554, 0], [-95.554, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 1, "k": [{ "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 0.711, "s": [71.293] }, { "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 220.59, "s": [22.293] }, { "t": 330.939453125, "s": [71.293] }], "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 11.147, "ix": 2 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Dashed Line", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 26, "ty": 4, "nm": "Line 105", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1137.331, 248.46, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-17.609, 0], [17.609, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 105", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 27, "ty": 4, "nm": "Line 99", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [723.521, 482.708, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-16.314, 0], [16.314, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 99", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 28, "ty": 4, "nm": "Line 104", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1460.508, 480.903, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-15.537, 0], [15.537, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 104", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 29, "ty": 4, "nm": "Q6 Diamond", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 267, "s": [2377.609, 143.109, 0], "to": [30, 0, 0], "ti": [-30, 0, 0] }, { "t": 294, "s": [2557.609, 143.109, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [12.742, 12.742], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.964705884457, 0.68235296011, 0.662745118141, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.348, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 50", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 30, "ty": 4, "nm": "Line 96", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2685.884, 144.85, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[54.899, 0], [-54.899, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 96", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 31, "ty": 4, "nm": "Line 98", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [2303.148, 137.628, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-23.047, 0], [23.047, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Line 98", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 32, "ty": 4, "nm": "Q2 - 03", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [956.063, 361.575, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 16.109, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [22.247, -56.788], [22.247, -1.487], [-25.002, -1.487], [-25.002, 56.788], [-45.031, 56.788], [-45.031, 56.969], [-65.257, 56.788]], "c": false }] }, { "t": 55.465, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 144.438, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [22.247, -56.788], [22.247, -1.487], [-25.002, -1.487], [-25.002, 56.788], [-45.031, 56.788], [-45.031, 56.969], [-65.257, 56.788]], "c": false }] }, { "t": 194.924, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }, { "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 306.984, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [22.247, -56.788], [22.247, -1.487], [-25.002, -1.487], [-25.002, 56.788], [-45.031, 56.788], [-45.031, 56.969], [-65.257, 56.788]], "c": false }] }, { "t": 334.361328125, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[65.257, -56.788], [48.089, -56.908], [47.919, -56.808], [23.528, -56.808], [23.364, -1.781], [-24.652, -1.44], [-24.781, 56.991], [-65.257, 56.788]], "c": false }], "h": 1 }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 0, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.203921571374, 0.658823549747, 0.32549020648, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.576, 0.641], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q2 - 03", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 33, "ty": 4, "nm": "Q5 Mini", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 241, "s": [1895.857, 134.982, 0], "to": [7.833, 0, 0], "ti": [-7.833, 0, 0] }, { "t": 255, "s": [1942.857, 134.982, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[4.85, -4.728], [-4.85, -3.274], [3.152, 4.728]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.996078431606, 0.96862745285, 0.878431379795, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.285, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q5 Mini", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 34, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1566.679, 229.894, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 224, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-4.115, -3.884], [-2.968, -3.884], [4.115, -3.884], [4.109, -2.485], [4.08, 3.884]], "c": false }] }, { "t": 245, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[101.129, -122.69], [101.082, -114.217], [101.067, -108.19], [116.682, -108.532], [122.782, -108.564]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.090196080506, 0.305882364511, 0.65098041296, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 5, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 35, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1593.093, 257.327, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 224, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-18.381, -17.609], [18.381, -17.609], [18.224, 17.609]], "c": false }] }, { "t": 245, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[59.619, -108.832], [59.881, -66.095], [108.724, -65.891]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.0941176489, 0.352941185236, 0.737254917622, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-0.855, -0.348], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 20, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 36, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1623.131, 289.15, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 224, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-34.292, -32.628], [34.292, -32.628], [34, 32.628]], "c": false }] }, { "t": 245, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[14.208, -91.187], [14.726, -23.882], [92.5, -23.872]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.098039217293, 0.403921574354, 0.823529422283, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 38, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 37, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1652.652, 319.327, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 224, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-49.381, -46.871], [49.381, -46.871], [48.96, 46.871]], "c": false }] }, { "t": 245, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-26.881, -75.371], [-26.619, 19.629], [77.96, 18.371]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.101960785687, 0.450980395079, 0.909803926945, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 50, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 38, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1681.137, 349.504, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0, "y": 1 }, "o": { "x": 1, "y": 0 }, "t": 224, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-64.469, -61.113], [64.469, -61.113], [63.92, 61.113]], "c": false }] }, { "t": 245, "s": [{ "i": [[0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0]], "v": [[-64.469, -61.113], [-63.531, 61.387], [63.92, 61.113]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 68, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.258823543787, 0.521568655968, 0.956862747669, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 39, "ty": 4, "nm": "Dashed Line", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1997.063, 319.876, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[84.641, 0], [-84.641, 0]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 11.147, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 1, "k": [{ "i": { "x": [0.07], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": -1, "s": [22.293] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.93], "y": [0] }, "t": 188.08, "s": [71.293] }, { "t": 449, "s": [22.293] }], "ix": 1 } }, { "n": "g", "nm": "gap", "v": { "a": 0, "k": 11.147, "ix": 2 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 52.605, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Dashed Line", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 40, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1834.439, 166.796, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, -16.04]], "o": [[16.993, 0], [0, 0]], "v": [[-15.363, -14.501], [15.363, 14.501]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -90, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 41, "ty": 4, "nm": "Q1 - 1 TEST", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [569.702, 396.142, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 1 }, "o": { "x": 0.167, "y": 0 }, "t": 0, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-47.073, -42.597], [-47.778, 13.591], [40.388, 14.392], [3.295, -49.679], [-46.914, 38.977], [45.562, 40.602]], "c": false }] }, { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0 }, "t": 107, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-47.073, -42.597], [-47.778, 13.591], [40.388, 14.392], [3.295, -49.679], [-46.914, 38.977], [45.562, 40.602]], "c": false }] }, { "t": 121, "s": [{ "i": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], "v": [[-47.073, -42.597], [-47.778, 13.591], [-4.534, -48.012], [41.724, 6.581], [-46.914, 38.977], [45.562, 40.602]], "c": false }] }], "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "rd", "nm": "Round Corners 1", "r": { "a": 0, "k": 40.602, "ix": 1 }, "ix": 2, "mn": "ADBE Vector Filter - RC", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.976470588235, 0.670588235294, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 16.72, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [1.043, 1.176], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [198.54, 200.487], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q1 - 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 42, "ty": 4, "nm": "Vector", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 94, "s": [479.585, 273.239, 0], "to": [0, 11.667, 0], "ti": [0, -11.667, 0] }, { "t": 117, "s": [479.585, 343.239, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[6.733, -7.133], [-6.733, -7.133], [-6.733, 7.133], [6.733, 7.133]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.996078431373, 0.96862745098, 0.878431372549, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Vector", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 43, "ty": 4, "nm": "Q4 Mini", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 212, "s": [1528.479, 479.116, 0], "to": [8.333, 0, 0], "ti": [-8.333, 0, 0] }, { "t": 228, "s": [1578.479, 479.116, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0], [0, 0], [0, 0]], "o": [[0, 0], [0, 0], [0, 0], [0, 0]], "v": [[4.508, -4.508], [-4.508, -4.508], [-4.508, 4.508], [4.508, 4.508]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.541176497936, 0.705882370472, 0.972549021244, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 43.411, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Q4 Mini", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": -1, "op": 236, "st": 1, "bm": 0 }, { "ddd": 0, "ind": 44, "ty": 4, "nm": "Pattern/Main", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1388, 248, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [1388, 248], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0.547, 1.211], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Pattern/Main", "np": 1, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 462, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 45, "ty": 4, "nm": "Ellipse 94", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.2, "y": 1 }, "o": { "x": 0.8, "y": 0 }, "t": 148, "s": [791.296, 477.345, 0], "to": [9.167, 0, 0], "ti": [-9.167, 0, 0] }, { "t": 169, "s": [846.296, 477.345, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 96.745, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [14.502, 15.363], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.658823549747, 0.854901969433, 0.709803938866, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 94", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 463, "st": 0, "bm": 0 }], "markers": [{ "tm": -5940, "cm": "S:[false]", "dr": 0 }, { "tm": 54, "cm": "1", "dr": 0 }] },
  loop: false,
  autoplay: false
})

var animation17 = bodymovin.loadAnimation({
  container: document.getElementById('lottie17'),
  //path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-launch-explore-trail.json',
  animationData: { "v": "5.7.8", "fr": 60, "ip": 0, "op": 303, "w": 2776, "h": 1100, "nm": "Launch Explore Trail_V2 [Lottie]", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 3, "nm": "Stars transform null", "sr": 1, "ks": { "o": { "a": 0, "k": 0, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [1698.585, 475.885, 0], "to": [-424.352, 0, 0], "ti": [276.247, 0, 0] }, { "t": 169, "s": [-1044.794, 475.885, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [60, 60, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Rectangle 38", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [166.295, 354.045, 0], "to": [-10, 0, 0], "ti": [10, 0, 0] }, { "t": 169, "s": [106.295, 354.045, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [54.288, 54.288, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [15.557, 15.557], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 38", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 3, "ty": 4, "nm": "Ellipse 104", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [1271.15, 68.5, 0], "to": [-26.667, 0, 0], "ti": [-6, 0, 0] }, { "t": 169, "s": [1307.15, 68.5, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [51.429, 51.429, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [14, 14], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 55", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 4, "nm": "Ellipse 55", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [1363.15, -211.5, 0], "to": [-44, 0, 0], "ti": [44, 0, 0] }, { "t": 169, "s": [1099.15, -211.5, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [51.429, 51.429, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 0, "k": [14, 14], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 55", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "Polygon 6", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [-639.615, 210.377, 0], "to": [-6, 0, 0], "ti": [6, 0, 0] }, { "t": 169, "s": [-675.615, 210.377, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [22.295, -22.295, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "sr", "sy": 2, "d": 1, "pt": { "a": 0, "k": 6, "ix": 3 }, "p": { "a": 0, "k": [0, 0], "ix": 4 }, "r": { "a": 0, "k": 0, "ix": 5 }, "or": { "a": 0, "k": 14.668, "ix": 7 }, "os": { "a": 0, "k": 0, "ix": 9 }, "ix": 1, "nm": "Polystar Path 1", "mn": "ADBE Vector Shape - Star", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -30.124, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 6", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 6, "ty": 4, "nm": "Polygon 16", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [-223.15, -294.2, 0], "to": [12.667, 0, 0], "ti": [-12.667, 0, 0] }, { "t": 169, "s": [-147.15, -294.2, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [35.134, 35.134, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "sr", "sy": 2, "d": 1, "pt": { "a": 0, "k": 3, "ix": 3 }, "p": { "a": 0, "k": [0, 0], "ix": 4 }, "r": { "a": 0, "k": 0, "ix": 5 }, "or": { "a": 0, "k": 14.5, "ix": 7 }, "os": { "a": 0, "k": 0, "ix": 9 }, "ix": 1, "nm": "Polystar Path 1", "mn": "ADBE Vector Shape - Star", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 7", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 7, "ty": 4, "nm": "Polygon 15", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [566.85, 291.8, 0], "to": [-13.333, 0, 0], "ti": [13.333, 0, 0] }, { "t": 169, "s": [486.85, 291.8, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [35.134, 35.134, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "sr", "sy": 2, "d": 1, "pt": { "a": 0, "k": 3, "ix": 3 }, "p": { "a": 0, "k": [0, 0], "ix": 4 }, "r": { "a": 0, "k": 0, "ix": 5 }, "or": { "a": 0, "k": 14.5, "ix": 7 }, "os": { "a": 0, "k": 0, "ix": 9 }, "ix": 1, "nm": "Polystar Path 1", "mn": "ADBE Vector Shape - Star", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 7", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 8, "ty": 4, "nm": "Polygon 14", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [726.85, -104.2, 0], "to": [-13.333, 0, 0], "ti": [13.333, 0, 0] }, { "t": 169, "s": [646.85, -104.2, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [35.134, 35.134, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "sr", "sy": 2, "d": 1, "pt": { "a": 0, "k": 3, "ix": 3 }, "p": { "a": 0, "k": [0, 0], "ix": 4 }, "r": { "a": 0, "k": 0, "ix": 5 }, "or": { "a": 0, "k": 14.5, "ix": 7 }, "os": { "a": 0, "k": 0, "ix": 9 }, "ix": 1, "nm": "Polystar Path 1", "mn": "ADBE Vector Shape - Star", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 7", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 9, "ty": 4, "nm": "Polygon 7", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [-989.15, 539.8, 0], "to": [-6, 0, 0], "ti": [6, 0, 0] }, { "t": 169, "s": [-1025.15, 539.8, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [28.238, 28.238, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "sr", "sy": 2, "d": 1, "pt": { "a": 0, "k": 3, "ix": 3 }, "p": { "a": 0, "k": [0, 0], "ix": 4 }, "r": { "a": 0, "k": 0, "ix": 5 }, "or": { "a": 0, "k": 14.5, "ix": 7 }, "os": { "a": 0, "k": 0, "ix": 9 }, "ix": 1, "nm": "Polystar Path 1", "mn": "ADBE Vector Shape - Star", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Polygon 7", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 10, "ty": 4, "nm": "Rectangle 44", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [917.05, 74.2, 0], "to": [-46.667, 0, 0], "ti": [46.667, 0, 0] }, { "t": 169, "s": [637.05, 74.2, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [25.456, 25.456, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [15.557, 15.557], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 37", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 11, "ty": 4, "nm": "Rectangle 45", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [70.05, 414.2, 0], "to": [-66.667, 0, 0], "ti": [66.667, 0, 0] }, { "t": 169, "s": [-329.95, 414.2, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [48.183, 48.183, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [15.557, 15.557], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 37", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 12, "ty": 4, "nm": "Rectangle 37", "parent": 1, "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": -10, "s": [0] }, { "t": 9, "s": [100] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": -10, "s": [-717.95, -229.8, 0], "to": [-13.333, 0, 0], "ti": [13.333, 0, 0] }, { "t": 169, "s": [-797.95, -229.8, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [48.183, 48.183, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [15.557, 15.557], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.235294118524, 0.250980407, 0.262745112181, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [200, 200], "ix": 3 }, "r": { "a": 0, "k": -45, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 37", "np": 2, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 13, "ty": 4, "nm": "Shape Layer 6", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 75, "s": [0] }, { "i": { "x": [0.55], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 118, "s": [0] }, { "t": 150, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.55, "y": 1 }, "o": { "x": 0.45, "y": 0 }, "t": 75, "s": [1097.998, 409.265, 0], "to": [-147.833, 0, 0], "ti": [147.833, 0, 0] }, { "t": 150, "s": [210.998, 409.265, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1171, -311, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.55, 0.55, 0.55], "y": [1, 1, 1] }, "o": { "x": [0.45, 0.45, 0.45], "y": [0, 0, 0] }, "t": 75, "s": [99.915, 306.915, 100] }, { "t": 150, "s": [99.915, 22.915, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-1171, -455], [-1171, -167]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.400000029919, 0.61568627451, 0.964705942191, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 14, "ty": 4, "nm": "Shape Layer 5", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.55], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 59, "s": [0] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 94, "s": [50] }, { "t": 127, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.55, "y": 1 }, "o": { "x": 0.45, "y": 0 }, "t": 59, "s": [1097.998, 409.265, 0], "to": [-147.833, 0, 0], "ti": [147.833, 0, 0] }, { "t": 127, "s": [210.998, 409.265, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1171, -311, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.55, 0.55, 0.55], "y": [1, 1, 1] }, "o": { "x": [0.45, 0.45, 0.45], "y": [0, 0, 0] }, "t": 59, "s": [99.915, 306.915, 100] }, { "t": 127, "s": [99.915, 22.915, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-1171, -455], [-1171, -167]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.400000029919, 0.61568627451, 0.964705942191, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 15, "ty": 4, "nm": "Shape Layer 4", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.55], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 38, "s": [0] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 72, "s": [50] }, { "t": 106, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.55, "y": 1 }, "o": { "x": 0.45, "y": 0 }, "t": 38, "s": [1097.998, 409.265, 0], "to": [-147.833, 0, 0], "ti": [147.833, 0, 0] }, { "t": 106, "s": [210.998, 409.265, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1171, -311, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.55, 0.55, 0.55], "y": [1, 1, 1] }, "o": { "x": [0.45, 0.45, 0.45], "y": [0, 0, 0] }, "t": 38, "s": [99.915, 306.915, 100] }, { "t": 106, "s": [99.915, 22.915, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-1171, -455], [-1171, -167]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.400000029919, 0.61568627451, 0.964705942191, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 16, "ty": 4, "nm": "Shape Layer 3", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.55], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 25, "s": [0] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 49, "s": [50] }, { "t": 71, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.55, "y": 1 }, "o": { "x": 0.45, "y": 0 }, "t": 25, "s": [1097.998, 409.265, 0], "to": [-147.833, 0, 0], "ti": [147.833, 0, 0] }, { "t": 71, "s": [210.998, 409.265, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1171, -311, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.55, 0.55, 0.55], "y": [1, 1, 1] }, "o": { "x": [0.45, 0.45, 0.45], "y": [0, 0, 0] }, "t": 25, "s": [99.915, 306.915, 100] }, { "t": 71, "s": [99.915, 22.915, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-1171, -455], [-1171, -167]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.400000029919, 0.61568627451, 0.964705942191, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 17, "ty": 4, "nm": "Shape Layer 2", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.55], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": 10, "s": [0] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 34, "s": [30] }, { "t": 56, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.55, "y": 1 }, "o": { "x": 0.45, "y": 0 }, "t": 10, "s": [1097.998, 409.265, 0], "to": [-147.833, 0, 0], "ti": [147.833, 0, 0] }, { "t": 56, "s": [210.998, 409.265, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1171, -311, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.55, 0.55, 0.55], "y": [1, 1, 1] }, "o": { "x": [0.45, 0.45, 0.45], "y": [0, 0, 0] }, "t": 10, "s": [99.915, 306.915, 100] }, { "t": 56, "s": [99.915, 22.915, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-1171, -455], [-1171, -167]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.400000029919, 0.61568627451, 0.964705942191, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 18, "ty": 4, "nm": "Shape Layer 1", "sr": 1, "ks": { "o": { "a": 1, "k": [{ "i": { "x": [0.55], "y": [1] }, "o": { "x": [0.45], "y": [0] }, "t": -5, "s": [0] }, { "i": { "x": [0.833], "y": [1] }, "o": { "x": [0.167], "y": [0] }, "t": 14, "s": [30] }, { "t": 29, "s": [0] }], "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.55, "y": 1 }, "o": { "x": 0.45, "y": 0 }, "t": -5, "s": [1097.998, 409.265, 0], "to": [-147.833, 0, 0], "ti": [147.833, 0, 0] }, { "t": 29, "s": [210.998, 409.265, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1171, -311, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.55, 0.55, 0.55], "y": [1, 1, 1] }, "o": { "x": [0.45, 0.45, 0.45], "y": [0, 0, 0] }, "t": -5, "s": [99.915, 306.915, 100] }, { "t": 29, "s": [99.915, 22.915, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [0, 0]], "o": [[0, 0], [0, 0]], "v": [[-1171, -455], [-1171, -167]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.400000029919, 0.61568627451, 0.964705942191, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 2, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }, { "ddd": 0, "ind": 19, "ty": 4, "nm": "Dashed Lines", "sr": 1, "ks": { "o": { "a": 0, "k": 30, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [1516.975, 749.141, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [112, 112, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 0], [300, 0], [0, 0]], "o": [[0, 0], [-346, -4], [0, 0]], "v": [[-30, 188], [-340, -300], [-1264, -300]], "c": false }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "tm", "s": { "a": 0, "k": 100, "ix": 1 }, "e": { "a": 1, "k": [{ "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.167], "y": [0.129] }, "t": -11, "s": [100] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 97, "s": [41] }, { "i": { "x": [0.23], "y": [1] }, "o": { "x": [0.77], "y": [0] }, "t": 109, "s": [41] }, { "t": 261, "s": [0] }], "ix": 2 }, "o": { "a": 0, "k": 0, "ix": 3 }, "m": 1, "ix": 2, "nm": "Trim Paths 1", "mn": "ADBE Vector Filter - Trim", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.400000029919, 0.61568627451, 0.964705942191, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 6, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "d": [{ "n": "d", "nm": "dash", "v": { "a": 1, "k": [{ "i": { "x": [0.08], "y": [1] }, "o": { "x": [0.167], "y": [0.233] }, "t": 145, "s": [46] }, { "t": 307, "s": [34] }], "ix": 1 } }, { "n": "o", "nm": "offset", "v": { "a": 1, "k": [{ "i": { "x": [0.286], "y": [1] }, "o": { "x": [0.167], "y": [0.163] }, "t": -11, "s": [4] }, { "t": 307, "s": [1833] }], "ix": 7 } }], "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 4, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -292, "bm": 0 }, { "ddd": 0, "ind": 20, "ty": 4, "nm": "End Circle Blue", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.167, "y": 0.115 }, "t": -10, "s": [126.127, 414.18, 0], "to": [4.107, 0.373, 0], "ti": [-24.109, -0.103, 0] }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 97, "s": [1150.367, 412.5, 0], "to": [193.541, 0.83, 0], "ti": [-24.109, -0.103, 0] }, { "t": 98, "s": [1150.367, 412.5, 0], "h": 1 }, { "i": { "x": 0.23, "y": 1 }, "o": { "x": 0.77, "y": 0 }, "t": 109, "s": [1150.367, 412.5, 0], "to": [193.541, 0.83, 0], "ti": [4.448, -288.718, 0] }, { "t": 261, "s": [1483.433, 971.864, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1046.391, -98.391, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.167, 0.167, 0.167], "y": [0.165, 0.165, -5.317] }, "t": -10, "s": [56.278, 56.278, 100] }, { "i": { "x": [0.23, 0.23, 0.23], "y": [1, 1, 1] }, "o": { "x": [0.77, 0.77, 0.77], "y": [0, 0, 0] }, "t": 91, "s": [20.193, 20.193, 100] }, { "t": 109, "s": [20.193, 20.193, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[27.398, 0], [0, -27.398], [-27.398, 0], [0, 27.398]], "o": [[-27.398, 0], [0, 27.398], [27.398, 0], [0, -27.398]], "v": [[0, -49.609], [-49.609, 0], [0, 49.609], [49.609, 0]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.4, 0.61568627451, 0.964705882353, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-1046.391, -98.391], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -292, "bm": 0 }, { "ddd": 0, "ind": 21, "ty": 4, "nm": "End Circle Pulse", "parent": 20, "sr": 1, "ks": { "o": { "a": 0, "k": 20, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.27, "y": 1 }, "o": { "x": 0.73, "y": 0 }, "t": -10, "s": [-1137.963, -99.279, 0], "to": [15.334, 0, 0], "ti": [-15.334, 0, 0] }, { "t": 267, "s": [-1045.958, -99.279, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [-1151.645, -279.465, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.36, 0.36, 0.36], "y": [1, 1, 1] }, "o": { "x": [0.64, 0.64, 0.64], "y": [0, 0, 0] }, "t": -10, "s": [259.963, 259.963, 100] }, { "t": 91, "s": [379.449, 379.449, 100] }], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[42.804, 0], [0, -42.804], [-42.804, 0], [0, 42.804]], "o": [[-42.804, 0], [0, 42.804], [42.804, 0], [0, -42.804]], "v": [[0, -77.504], [-77.504, 0], [0, 77.504], [77.504, 0]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.258823529412, 0.521568627451, 0.956862804936, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [-1151.645, -279.465], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 303, "st": -310, "bm": 0 }], "markers": [{ "tm": -310, "cm": "Intro\r", "dr": 0 }, { "tm": 6, "cm": "1", "dr": 0 }] },
  loop: false,
  autoplay: false
})

/* --------------------remove-----*/
$("a.back").on("click", function () {
  console.log('back');
  // Display Results
  pageNumber = pageNumber - 1;

  displayResult(data, pageNumber);

  animationFlow(data, pageNumber);

  // Change the status bar
  changeStatusBar(data, pageNumber);

  //totalScore= score + slideCcore;

  //console.log('Score '+ totalScore);

});
/* --------------------remove-----*/

$("a.next").on("click", function () {
  console.log('next');
  // Display Results
  pageNumber = pageNumber + 1;

  displayResult(data, pageNumber);

  animationFlow(data, pageNumber);

  // Change the status bar
  changeStatusBar(data, pageNumber);

  totalScore = score + slideCcore;

  console.log('Score ' + totalScore);

});



$("#button-container").on("click", '.option', function () {
  console.log('question box');

  var slectedBtn = $(this).attr('value');

  boxQuestionChange(data, pageNumber, slectedBtn);

});

function displayResult(data, pageNumber) {

  var dataLength = data.length;

  if (pageNumber < dataLength) {

    var pageType = data[pageNumber].Pagetype;

    $('.master-container').removeClass(pageClass);
    pageClass = data[pageNumber].Page;

    $('.master-container').addClass(pageClass);

    $('.animation-container').removeClass('hidden');

    if (pageType == "text") {
      displayText(data, pageNumber);
    } else if (pageType == "question") {
      displayQuestion(data, pageNumber);
    } else if (pageType == "result") {
      displayFinal(data, pageNumber);
    }

  }

}

function displayText(data, pageNumber) {
  console.log('disply text');

  var textDisplay = data[pageNumber].Pagetyeptext[0].Text;



  $('#questionContainer').addClass('hidden');

  $('#textContainer').removeClass('hidden');
  $("#textContainer").html(textDisplay);

  if (data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX.length > 0) {
    console.log('text animations');

    var xPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX;
    var yPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationY;
    var Scale = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationScale;
    var duration = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationDuration;
    var transition = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationTransition;

    gsap.set(".text-container", { autoAlpha: 0.1 });
    gsap.to(".text-container", { x: xPos, y: yPos, autoAlpha: 1, scale: Scale, duration: duration, ease: "power3.out" });
  }

  if (data[pageNumber].Page == 'one') {
    // animation step 1
    gsap.from(".header-container", { scale: 1, opacity: 1, duration: 1, ease: "power3.out" });

    if (window.matchMedia('(max-width: 767px)').matches) {
      gsap.set(".animation-container .lottie-env", { y: '100%', opacity: 1, });
    } else {
      gsap.set(".animation-container .lottie-env", { y: '85%', opacity: 1, });
    }

    // animation step 2
    gsap.from(".header-container", { y: 180, scale: 1, duration: 1.5, delay: 1, ease: "sine.out" });

    if (window.matchMedia('(max-width: 767px)').matches) {
      gsap.to(".animation-container .lottie-env", { x: '47%', y: '120%', opacity: 1, duration: 1.5, scale: 0.6, delay: 1, ease: "sine.out" });
    } else {
      gsap.to(".animation-container .lottie-env", { y: '112%', opacity: 1, duration: 1.5, delay: 1, ease: "sine.out" });
    }



    // animation step 3
    gsap.set(".text-container h1", { y: 170, scale: 1, opacity: 0 });
    gsap.set(".text-container h1", { y: 170, scale: 1, opacity: 1, delay: 0.4 });
    gsap.set(".text-container h1 .one", { opacity: 0.2, delay: 0.4 });

    if (window.matchMedia('(max-width: 767px)').matches) {
      gsap.set(".text-container h1 .two", { x: 4, opacity: 0, delay: 0.4 });

    } else {
      gsap.set(".text-container h1 .two", { x: 15, opacity: 0, delay: 0.4 });
    }

    gsap.set(".text-container h1 .two", { opacity: 0.2, delay: 0.7 });
    gsap.to(".text-container h1 .one", { y: 50, scale: 1, duration: 0.5, delay: 0.4, ease: "sine.out" });
    gsap.to(".text-container h1 .two", { y: 100, scale: 1, duration: 0.5, delay: 0.7, ease: "sine.out" });
    gsap.to(".text-container h1", { y: 0, scale: 1, duration: 0.9, delay: 1, ease: "sine.out" });
    gsap.to(".text-container h1 .one", { y: 0, scale: 1, opacity: 1, duration: 1.5, delay: 0.8, ease: "sine.out" });
    gsap.to(".text-container h1 .two", { y: 0, scale: 1, opacity: 1, duration: 1.5, delay: 1.2, ease: "sine.out" });

    //gsap.from(".text-container h1", {  y:-119, scale: 1.2, opacity:0.2, duration: 1.5, delay:2, ease: "power3.out"});
    gsap.from(".text-container h2", { y: 119, scale: 1, opacity: 0, duration: 1.5, delay: 2, ease: "power3.out" });
    gsap.from(".text-container .start-btn", { scale: 1, opacity: 0, duration: 1.5, delay: 2.5, ease: "power3.out" });
    //gsap.to(".animation-container .lottie-env", { y: '90%', opacity:1, duration: 1.5, delay:0.2, ease: "power3.out"});



  } else if (data[pageNumber].Page == 'two') {

    gsap.from(".text-container", { opacity: 0, duration: 1.5, delay: 0.5, ease: "power3.out" });

  } else if (data[pageNumber].Page == 'Sixteen') {
    // Update the Continue button on insight 7 to say 'See my results'

    if (window.matchMedia('(max-width: 767px)').matches) {

      $('.text-container .next').text('See my results');

    } else {

      $('.progress-container .next').text('See my results');

    }

  }

}

$("#textContainer").on("click", "a.next", function () {
  console.log('next');
  // Display Results
  pageNumber = pageNumber + 1;


  displayResult(data, pageNumber);

  animationFlow(data, pageNumber);

  // Change the status bar
  changeStatusBar(data, pageNumber);

});

function displayQuestion(data, pageNumber) {
  console.log('display question');

  var questDisplay = data[pageNumber].QuestionTypetext[0].PrimaryQuest;

  $('#textContainer').addClass('hidden');
  $('#questionContainer').removeClass('hidden');
  $('#button-container').removeClass('box');
  $('#button-container').removeClass('stack');
  $('#button-container').removeClass('slider');

  $("#questionContainer .quest-text-container").html(questDisplay);

  var ele = document.getElementById('button-container');
  var eleStack = document.getElementById('columns');
  var eleSlide = document.getElementById('slider-container');

  ele.innerHTML = '';
  eleStack.innerHTML = '';
  eleSlide.innerHTML = '';

  for (var i = 0; i < data[pageNumber].QuestionTypetext[0].Questions.length; i++) {
    // POPULATE SELECT ELEMENT WITH JSON.

    var questionType = data[pageNumber].QuestionTypetext[0].QuestionType;


    if (data[pageNumber].QuestionTypetext[0].Questions[0].Question[i] != undefined) {

      if (questionType == 'box') {

        $('#button-container').addClass('box');

        ele.innerHTML = ele.innerHTML +
          '<a id="btn-01" href="#" class="option" value="' + (i + 1) + '" >' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</a>';

      } else if (questionType == 'stack') {

        $('#button-container').addClass('stack');

        eleStack.innerHTML = eleStack.innerHTML +
          '<li class="column" draggable="true" value="' + (i + 1) + '" ><header>' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</header></li>';

        draggable();

      } else if (questionType == 'slider') {

        //$('#button-container').addClass('slider-container');

        var noQuestions = i + 1;

        eleSlide.innerHTML = eleSlide.innerHTML +
          //'<a id="btn-01" href="#" class="option" value="' + (i+1) + '" >' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</a>';
          '<span class="slider-heading">' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</span><div id="slide-' + i + '" class="slider" data-min="1" data-max="5" data-value="' + noQuestions + '" data-step="1"></div>';

        if (data[pageNumber].QuestionTypetext[0].Questions.length == noQuestions) {
          slidable();
        }

      }

    }

  }

  if (data[pageNumber].QuestionTypetext[0].Animation[0].AnimationX.length > 0) {
    console.log('text animations');

    var xPos = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationX;
    var yPos = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationY;
    var Scale = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationScale;
    var duration = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationDuration;
    var transition = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationTransition;
    gsap.set(".quest-text-container p", { autoAlpha: 0 });
    gsap.from(".quest-text-container", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out" });
    gsap.from(".box", { x: -xPos, y: -yPos, scale: Scale, duration: duration, ease: "power3.out" });
    gsap.from(".stack-container", { x: -xPos, y: -yPos, scale: Scale, duration: duration, ease: "power3.out" });
    gsap.from(".range-slider-wrapper", { x: -xPos, y: -yPos, scale: Scale, duration: duration, ease: "power3.out" });

    var newDuration = duration + 1;
    gsap.to(".quest-text-container p", { autoAlpha: 1, duration: newDuration, delay: duration, ease: "none" });
  }

  if (data[pageNumber].Page == 'two') {

  } else if (data[pageNumber].Page == 'three') {
    gsap.from(".header-container", { opacity: 0, duration: 1.5, delay: 0.7, ease: "power3.out" });
    gsap.from(".progress-container", { y: '150px', scale: 1.2, opacity: 0.2, duration: 1.5, delay: 0.9, ease: "power3.out" });
  } else if (data[pageNumber].Page == 'five') {
    animation15.playSegments([0, 20], true);
  } else if (data[pageNumber].Page == 'seven') {
    // add in the classes for slider animation
    $('.animation-container').addClass('s1-one');
    $('.animation-container').addClass('st-three');
    animation8.playSegments([30, 30], true);
    animation9.playSegments([30, 30], true);
    animation10.playSegments([30, 30], true);
    animation11.playSegments([30, 30], true);
    animation12.playSegments([30, 30], true);


    animation15.playSegments([35, 50], true);
  } else if (data[pageNumber].Page == 'nine') {
    gsap.set(".stack-container p", { autoAlpha: 0 });
    var newDuration = duration + 1;
    gsap.to(".stack-container p", { autoAlpha: 1, duration: newDuration, delay: duration, ease: "none" });
  } else if (data[pageNumber].Page == 'eleven') {
    animation15.playSegments([65, 80], true);
  } else if (data[pageNumber].Page == 'thirteen') {
    animation15.playSegments([95, 110], true);
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    $(".option").mouseover(function () {
      gsap.to(bigBall, { scale: 1.75, duration: 0.3, ease: "none" });
      $('.cursor').addClass('active');
    })

    $(".column").mouseover(function () {
      gsap.to(bigBall, { scale: 1.75, duration: 0.3, ease: "none" });
      $('.cursor').addClass('active');
    })

    $(".option").mouseleave(function () {
      gsap.to(bigBall, { scale: 1, duration: 0.3, ease: "none" });
      $('.cursor').removeClass('active');
    })

    $(".column").mouseleave(function () {
      gsap.to(bigBall, { scale: 1, duration: 0.3, ease: "none" });
      $('.cursor').removeClass('active');
    })

  }



}

//This is the drag event function - start

//$(draggabke);
function draggable() {
  var oldIndex = 0;
  $(".droppable-area1").sortable({
    stack: '.connected-sortable ul',
    update: function (event, ui) { }
  });

  $(".droppable-area1").on("sortupdate", function (event, ui) {

    oldIndex = oldIndex + 1;

    if (topValue > 0) {
      score = score - topValue;
    }

    topValue = $(this).children().first().val();
    console.log(topValue);

    var startPlay = oldIndex * 30 - 30;
    var endPlay = oldIndex * 30;
    if (oldIndex > 6) {
      oldIndex = 0;
    }

    animation7.playSegments([startPlay, endPlay], true);

    score = score + topValue;

  });

}

//This is the drag event function - end
//This is the slider event function - start

//$('body').on('click', '.toggle-filters', function() {
function slidable() {
  var $this = $(this),
    rangeWrapper = $('.range-slider-wrapper'),
    advancedFilters = $('.advanced-filters');

  if (!rangeWrapper.hasClass('filters-expanded')) {

    $this.html('Hide advanced filters');
    rangeWrapper.addClass('filters-expanded');
    advancedFilters.slideDown();

    $('.slider').each(function () {
      var minValue = Number($(this).find('.min-value').attr('data-selected-value')),
        maxValue = Number($(this).attr('data-max')),
        value = Number($(this).attr('data-value')),
        step = Number($(this).attr('data-step')),
        $this = $(this);

      $this.slider({
        range: true,
        values: [minValue, maxValue],
        slide: function (event, ui) {
          var selectedMin = ui.values[0],
            selectedMax = ui.values[1],
            currentValueMin = selectedMin,
            currentValueMax = selectedMax;
          if (selectedMin > 999) {
            currentValueMin = selectedMin / 1000 + 'k';
            currentValueMax = selectedMax / 1000 + 'k';
          }

          $this.find('.min-value').html(currentValueMin).attr('data-selected-value', selectedMin);
          $this.find('.max-value').html(currentValueMax).attr('data-selected-value', selectedMax);
        }

      });

      var currentValueMin = minValue,
        currentValueMax = maxValue;
      if (currentValueMin > 999) {
        currentValueMin = currentValueMin / 1000 + 'k';
        currentValueMax = currentValueMax / 1000 + 'k';
      }

      $this.find('span[tabindex]:first-of-type .value').html(currentValueMin).attr('data-selected-value', minValue);
      $this.find('span[tabindex]:last-of-type').append('<span class="value max-value" data-selected-value></span>').find('.value').html(currentValueMax).attr('data-selected-value', maxValue);
    });

  } else {

    $this.html('Show advanced filters');
    rangeWrapper.removeClass('filters-expanded');
    advancedFilters.slideUp();

    $('.slider').each(function () {
      var value = Number($(this).attr('data-value')),
        $this = $(this);

      $this.slider({
        value: value,
        range: 'min',
        slide: function (event, ui) {
          var currentValue = ui.value;
          if (currentValue > 999) {
            currentValue = currentValue / 1000 + 'k';
          }
          $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);
        }
      });

    });
  }
  sliderEach();
};

function sliderEach() {

  $('.slider').each(function () {
    var minValue = Number($(this).attr('data-min')),
      maxValue = Number($(this).attr('data-max')),
      value = Number($(this).attr('data-value')),
      step = Number($(this).attr('data-step')),
      $this = $(this);

    $this.slider({
      range: 'min',
      value: value,
      min: minValue,
      max: maxValue,
      step: step,
      slide: function (event, ui) {
        var currentValue = ui.value;
        var carrentSlide = event.target.id;
        if (carrentSlide == 'slide-0') {
          slideOne = currentValue;
        } else if (carrentSlide == 'slide-1') {
          slideTwo = currentValue;
        } else if (carrentSlide == 'slide-2') {
          slideThree = currentValue;
        }


        if (currentValue > 999) {
          currentValue = currentValue / 1000 + 'k';
        }
        $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);

        console.log('slideOne ' + slideOne + ' slideTwo ' + slideTwo + ' slidethree ' + slideThree);

        slideCcore = slideOne + slideTwo + slideThree;


        if (carrentSlide == 'slide-0') {
          if (slideOne == 1) {

            $('.animation-container').addClass('s1-one');
            $('.animation-container').removeClass('s1-two');
            $('.animation-container').removeClass('s1-three');
            $('.animation-container').removeClass('s1-four');
            $('.animation-container').removeClass('s1-five');

          } else if (slideOne == 2) {

            $('.animation-container').removeClass('s1-one');
            $('.animation-container').addClass('s1-two');
            $('.animation-container').removeClass('s1-three');
            $('.animation-container').removeClass('s1-four');
            $('.animation-container').removeClass('s1-five');

          } else if (slideOne == 3) {

            $('.animation-container').removeClass('s1-one');
            $('.animation-container').removeClass('s1-two');
            $('.animation-container').addClass('s1-three');
            $('.animation-container').removeClass('s1-four');
            $('.animation-container').removeClass('s1-five');

          } else if (slideOne == 4) {

            $('.animation-container').removeClass('s1-one');
            $('.animation-container').removeClass('s1-two');
            $('.animation-container').removeClass('s1-three');
            $('.animation-container').addClass('s1-four');
            $('.animation-container').removeClass('s1-five');

          } else if (slideOne == 5) {

            $('.animation-container').removeClass('s1-one');
            $('.animation-container').removeClass('s1-two');
            $('.animation-container').removeClass('s1-three');
            $('.animation-container').removeClass('s1-four');
            $('.animation-container').addClass('s1-five');

          }
        } else if (carrentSlide == 'slide-1') {

          if (slideTwo == 1) {

            animation8.playSegments([30, 36], true);
            animation9.playSegments([30, 36], true);
            animation10.playSegments([30, 36], true);
            animation11.playSegments([30, 36], true);
            animation12.playSegments([30, 36], true);

          } else if (slideTwo == 2) {

            animation8.playSegments([37, 41], true);
            animation9.playSegments([37, 41], true);
            animation10.playSegments([37, 41], true);
            animation11.playSegments([37, 41], true);
            animation12.playSegments([37, 41], true);

          } else if (slideTwo == 3) {

            animation8.playSegments([42, 47], true);
            animation9.playSegments([42, 47], true);
            animation10.playSegments([42, 47], true);
            animation11.playSegments([42, 47], true);
            animation12.playSegments([42, 47], true);

          } else if (slideTwo == 4) {

            animation8.playSegments([48, 54], true);
            animation9.playSegments([48, 54], true);
            animation10.playSegments([48, 54], true);
            animation11.playSegments([48, 54], true);
            animation12.playSegments([48, 54], true);

          } else if (slideTwo == 5) {
            animation8.playSegments([55, 60], true);
            animation9.playSegments([55, 60], true);
            animation10.playSegments([55, 60], true);
            animation11.playSegments([55, 60], true);
            animation12.playSegments([55, 60], true);
          }

        } else if (carrentSlide == 'slide-2') {

          if (slideThree == 1) {
            $('.animation-container').addClass('st-one');
            $('.animation-container').removeClass('st-two');
            $('.animation-container').removeClass('st-three');
            $('.animation-container').removeClass('st-four');
            $('.animation-container').removeClass('st-five');
          } else if (slideThree == 2) {
            $('.animation-container').removeClass('st-one');
            $('.animation-container').addClass('st-two');
            $('.animation-container').removeClass('st-three');
            $('.animation-container').removeClass('st-four');
            $('.animation-container').removeClass('st-five');
          } else if (slideThree == 3) {
            $('.animation-container').removeClass('st-one');
            $('.animation-container').removeClass('st-two');
            $('.animation-container').addClass('st-three');
            $('.animation-container').removeClass('st-four');
            $('.animation-container').removeClass('st-five');
          } else if (slideThree == 4) {
            $('.animation-container').removeClass('st-one');
            $('.animation-container').removeClass('st-two');
            $('.animation-container').removeClass('st-three');
            $('.animation-container').addClass('st-four');
            $('.animation-container').removeClass('st-five');
          } else if (slideThree == 5) {
            $('.animation-container').removeClass('st-one');
            $('.animation-container').removeClass('st-two');
            $('.animation-container').removeClass('st-three');
            $('.animation-container').removeClass('st-four');
            $('.animation-container').addClass('st-five');
          }
        }


      }
    });


    var sliderHandle = $this.find('.ui-slider-handle'),
      currentValue = sliderHandle.parent().attr('data-value');
    sliderHandle.append('<span class="value min-value" data-selected-value="' + currentValue + '"></span>');

    if (minValue > 999) {
      value = value / 1000 + 'k';
    }
    $this.find('.value').html(value);
  });

}


//This is the slider event function - end

function changeStatusBar(data, pageNumber) {

  console.log('changeStatusBar')

  var dataLength = data.length;

  var totalQuestNumber = 7;

  if (pageNumber < dataLength) {

    var elem = document.getElementById("myBar");
    var width = 1;
    if (data[pageNumber].QuestionTypetext[0].QuestionNumber) {

      var questNumber = data[pageNumber].QuestionTypetext[0].QuestionNumber;

      $(".progress-container .current-quest-no").text(questNumber);
      $(".progress-container .total-quest-no").text(totalQuestNumber);
    }

    var progressLength = (questNumber / totalQuestNumber) * 100;

    elem.style.width = progressLength + '%';

    gsap.fromTo(".progress-container .next", { y: 110 }, { y: 0, duration: 0.5, delay: 0.2, });

  }
}

function boxQuestionChange(data, pageNumber, slectedBtn) {

  var numberElements = data[pageNumber].QuestionTypetext[0].Questions.length;


  if (data[pageNumber].QuestionTypetext[0].QuestionNumber == 1) {

    var hasActiveState = '';

    for (var j = 0; j < numberElements; j++) {

      if ($("#button-container .option").eq(j).hasClass('active')) {
        if (j == 0) {
          hasActiveState = false;
          animation1.playSegments([30, 60], true);
          $("#button-container .option").eq(j).removeClass('active');
        } else if (j == 1) {
          hasActiveState = false;
          animation2.playSegments([30, 60], true);
          $("#button-container .option").eq(j).removeClass('active');
        } else if (j == 2) {
          hasActiveState = false;
          animation3.playSegments([30, 60], true);
          $("#button-container .option").eq(j).removeClass('active');
        } else if (j == 3) {
          hasActiveState = false;
          animation4.playSegments([30, 60], true);
          $("#button-container .option").eq(j).removeClass('active');
        }
      }

    }

    if (!hasActiveState) {
      $("#button-container .option").eq(slectedBtn - 1).addClass('active');

      hasActiveState = true;
      //$(this).addClass('active');

      if (slectedBtn == 1) {
        animation1.playSegments([0, 30], true);
      } else if (slectedBtn == 2) {
        animation2.playSegments([0, 30], true);
      } else if (slectedBtn == 3) {
        animation3.playSegments([0, 30], true);
      } else if (slectedBtn == 4) {
        animation4.playSegments([0, 30], true);
      }
    }

    if (hasActiveState == true) {
      $('.progress-container').addClass('active');
      $('.questions-container').addClass('active');
    }

  } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber == 2) {

    $('.progress-container').removeClass('active');

    var hasActiveState = null;

    if ($("#button-container .option").eq(slectedBtn - 1).hasClass('active')) {
      if (slectedBtn == 1) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questTwoScore = questTwoScore - 1;
      } else if (slectedBtn == 2) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questTwoScore = questTwoScore - 1;
      } else if (slectedBtn == 3) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questTwoScore = questTwoScore - 1;
      } else if (slectedBtn == 4) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questTwoScore = questTwoScore - 1;
      }
    }

    if (hasActiveState == null) {
      $("#button-container .option").eq(slectedBtn - 1).addClass('active');

      hasActiveState = true;

      if (slectedBtn == 1) {
        score = score + 1;
        questTwoScore = questTwoScore + 1;
      } else if (slectedBtn == 2) {
        score = score + 1;
        questTwoScore = questTwoScore + 1;
      } else if (slectedBtn == 3) {
        score = score + 1;
        questTwoScore = questTwoScore + 1;
      } else if (slectedBtn == 4) {
        score = score + 1;
        questTwoScore = questTwoScore + 1;
      }
    }

    if (questTwoScore == 0) {
      if (hasActiveState == false) {
        animation5.playSegments([30, 0], true);
      }

    } else if (questTwoScore == 1) {
      if (hasActiveState == false) {
        animation5.playSegments([60, 30], true);
      } else {
        animation5.playSegments([0, 30], true);
      }
    } else if (questTwoScore == 2) {
      if (hasActiveState == false) {
        animation5.playSegments([90, 60], true);
      } else {
        animation5.playSegments([30, 60], true);
      }
    } else if (questTwoScore == 3) {
      if (hasActiveState == false) {
        animation5.playSegments([120, 90], true);
      } else {
        animation5.playSegments([60, 90], true);
      }
    } else if (questTwoScore == 4) {
      if (hasActiveState == false) {
        animation5.playSegments([150, 120], true);
      } else {
        animation5.playSegments([90, 120], true);
      }
    }

    if (questTwoScore >= 1) {
      $('.progress-container').addClass('active');
    }

  } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber == 3) {

    var hasActiveState = '';

    if ($("#button-container .option").eq(slectedBtn - 1).hasClass('active')) {
      if (slectedBtn == 1) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questThreeScore = questThreeScore - 1;
      } else if (slectedBtn == 2) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questThreeScore = questThreeScore - 1;
      } else if (slectedBtn == 3) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questThreeScore = questThreeScore - 1;
      } else if (slectedBtn == 4) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questThreeScore = questThreeScore - 1;
      }
    }

    if (!hasActiveState) {
      $("#button-container .option").eq(slectedBtn - 1).addClass('active');

      if (slectedBtn == 1) {
        score = score + 1;
        questThreeScore = questThreeScore + 1;
      } else if (slectedBtn == 2) {
        score = score + 1;
        questThreeScore = questThreeScore + 1;
      } else if (slectedBtn == 3) {
        score = score + 1;
        questThreeScore = questThreeScore + 1;
      } else if (slectedBtn == 4) {
        score = score + 1;
        questThreeScore = questThreeScore + 1;
      }
    }

    if (questThreeScore == 0) {
      if (hasActiveState == true) {
        animation6.playSegments([30, 0], true);
      }

    } else if (questThreeScore == 1) {
      if (hasActiveState == true) {
        animation6.playSegments([60, 30], true);
      } else {
        animation6.playSegments([0, 30], true);
      }
    } else if (questThreeScore == 2) {
      if (hasActiveState == true) {
        animation6.playSegments([91, 60], true);
      } else {
        animation6.playSegments([30, 60], true);
      }
    } else if (questThreeScore == 3) {
      if (hasActiveState == true) {
        animation6.playSegments([120, 91], true);
      } else {
        animation6.playSegments([60, 91], true);
      }
    }

  } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber == 6) {

    var hasActiveState = '';

    if ($("#button-container .option").eq(slectedBtn - 1).hasClass('active')) {
      if (slectedBtn == 1) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questSixScore = questSixScore - 1;
      } else if (slectedBtn == 2) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questSixScore = questSixScore - 1;
      } else if (slectedBtn == 3) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questSixScore = questSixScore - 1;
      } else if (slectedBtn == 4) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = true;
        score = score - 1;
        questSixScore = questSixScore - 1;
      }
    }

    if (!hasActiveState) {
      $("#button-container .option").eq(slectedBtn - 1).addClass('active');

      if (slectedBtn == 1) {
        score = score + 1;
        questSixScore = questSixScore + 1;
      } else if (slectedBtn == 2) {
        score = score + 1;
        questSixScore = questSixScore + 1;
      } else if (slectedBtn == 3) {
        score = score + 1;
        questSixScore = questSixScore + 1;
      } else if (slectedBtn == 4) {
        score = score + 1;
        questSixScore = questSixScore + 1;
      }
    }

    if (questSixScore == 0) {
      if (hasActiveState == true) {
        animation13.playSegments([30, 0], true);
      }

    } else if (questSixScore == 1) {
      if (hasActiveState == true) {
        animation13.playSegments([60, 30], true);
      } else {
        animation13.playSegments([0, 30], true);
      }
    } else if (questSixScore == 2) {
      if (hasActiveState == true) {
        animation13.playSegments([90, 60], true);
      } else {
        animation13.playSegments([30, 60], true);
      }
    } else if (questSixScore == 3) {
      if (hasActiveState == true) {
        animation13.playSegments([120, 90], true);
      } else {
        animation13.playSegments([60, 90], true);
      }
    }

  } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber == 7) {

    $('.progress-container').removeClass('active');

    var hasActiveState = null;

    if ($("#button-container .option").eq(slectedBtn - 1).hasClass('active')) {
      if (slectedBtn == 1) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questSevenScore = questSevenScore - 1;
      } else if (slectedBtn == 2) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questSevenScore = questSevenScore - 1;
      } else if (slectedBtn == 3) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questSevenScore = questSevenScore - 1;
      } else if (slectedBtn == 4) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questSevenScore = questSevenScore - 1;
      } else if (slectedBtn == 5) {
        $("#button-container .option").eq(slectedBtn - 1).removeClass('active');
        hasActiveState = false;
        score = score - 1;
        questSevenScore = questSevenScore - 1;
      }
    }

    if (hasActiveState == null) {
      $("#button-container .option").eq(slectedBtn - 1).addClass('active');

      hasActiveState = true;

      if (slectedBtn == 1) {
        score = score + 1;
        questSevenScore = questSevenScore + 1;
      } else if (slectedBtn == 2) {
        score = score + 1;
        questSevenScore = questSevenScore + 1;
      } else if (slectedBtn == 3) {
        score = score + 1;
        questSevenScore = questSevenScore + 1;
      } else if (slectedBtn == 4) {
        score = score + 1;
        questSevenScore = questSevenScore + 1;
      } else if (slectedBtn == 5) {
        score = score + 1;
        questSevenScore = questSevenScore + 1;
      }
    }

    if (questSevenScore == 0) {
      if (hasActiveState == false) {
        animation14.playSegments([30, 0], true);
      }

    } else if (questSevenScore == 1) {
      if (hasActiveState == false) {
        animation14.playSegments([60, 30], true);
      } else {
        animation14.playSegments([0, 30], true);
      }
    } else if (questSevenScore == 2) {
      if (hasActiveState == false) {
        animation14.playSegments([90, 60], true);
      } else {
        animation14.playSegments([30, 60], true);
      }
    } else if (questSevenScore == 3) {
      if (hasActiveState == false) {
        animation14.playSegments([120, 90], true);
      } else {
        animation14.playSegments([60, 90], true);
      }
    } else if (questSevenScore == 4) {
      if (hasActiveState == false) {
        animation14.playSegments([150, 120], true);
      } else {
        animation14.playSegments([90, 120], true);
      }
    } else if (questSevenScore == 5) {
      if (hasActiveState == false) {
        animation14.playSegments([170, 150], true);
      } else {
        animation14.playSegments([120, 150], true);
      }
    }

    if (questSevenScore >= 1) {
      $('.progress-container').addClass('active');
    }
  }

}

function displayFinal(data, pageNumber) {
  console.log('disply Final');

  var textDisplay = data[pageNumber].Pagetyeptext[0].Text;

  var solutionDisplay1 = data[pageNumber].SolutionTypetext[0].Solpath1;
  var solutionDisplay2 = data[pageNumber].SolutionTypetext[0].Solpath2;
  var solutionDisplay3 = data[pageNumber].SolutionTypetext[0].Solpath3;


  $('#questionContainer').addClass('hidden');
  $('#textContainer').removeClass('hidden');

  $("#textContainer").html(textDisplay);

  $('.solution-container ').removeClass('hidden');

  if (totalScore > 22) {
    $(".solution-container").html(solutionDisplay1);
  } else if (totalScore > 13) {
    $(".solution-container").html(solutionDisplay2);
  } else if (totalScore => 0) {
    $('.master-container').addClass('big-content');
    $(".solution-container").html(solutionDisplay3);
  }

  // animation step 1 - text container h2 - fades in 
  gsap.set(".text-container h2", { autoAlpha: 0 });
  gsap.to(".text-container h2", { autoAlpha: 1, duration: 1, ease: "power3.out" });
  // animation step 2 - text container h3 - animates up / fades in
  gsap.set(".text-container h3", { autoAlpha: 0, y: '65%' });
  gsap.to(".text-container h3", { y: '0', autoAlpha: 1, duration: 1, delay: 1, ease: "sine.out" });
  // animation step 3 - animation moves in from left and then down

  gsap.set(".animation-container .lottie-env", { x: '-23%', y: '33%', scale: 1.2 });

  if (window.matchMedia('(max-width: 767px)').matches) {
    // var tl = gsap.timeline();
    // tl.to(".animation-container .lottie-env", {duration: 1, x: '-23%', y: '33%', scale:1, autoAlpha:1}) 
    //   .to(".animation-container .lottie-env", {duration: 0.5, x: 0, y: '60%'})
    //   .to(".animation-container .lottie-env", {duration: 1.5, x: 0, y: '130%'});
    gsap.to(".animation-container .lottie-env", { duration: 1.5, x: '-32%', y: '120%', scale: 0.6, ease: "sine.out" });
  } else {
    // var tl = gsap.timeline();
    // tl.to(".animation-container .lottie-env", {duration: 1, x: '-23%', y: '33%', scale:1, autoAlpha:1}) 
    //   .to(".animation-container .lottie-env", {duration: 0.5, x: 0, y: '60%'})
    //   .to(".animation-container .lottie-env", {duration: 1.5, x: 0, y: '112%'});
    gsap.to(".animation-container .lottie-env", { duration: 1.5, x: 0, y: '115%', scale: 1, ease: "sine.out" });
  }

  // animation step 4 - text fades in 
  gsap.set(".solution-container", { autoAlpha: 0 });
  gsap.to(".solution-container", { autoAlpha: 1, duration: 1.5, delay: 2, ease: "sine.out" });
  // animation step 5 - button fades in 
  gsap.set(".findOut", { autoAlpha: 0 });
  gsap.to(".findOut", { autoAlpha: 1, duration: 1, delay: 2.5, ease: "sine.out" });


  $("a.findOut").on("click", function () {
    console.log('last');
    // Display Results
    displayOutro(data, pageNumber);

  });

}

function animationFlow(data, pageNumber) {

  console.log('animations');
  if (window.matchMedia('(max-width: 767px)').matches) {
    var xPos = data[pageNumber].Animation[1].AnimationX;
    var yPos = data[pageNumber].Animation[1].AnimationY;
    var Scale = data[pageNumber].Animation[1].AnimationScale;
    var duration = data[pageNumber].Animation[1].AnimationDuration;
    var transition = data[pageNumber].Animation[1].AnimationTransition;
  } else {
    var xPos = data[pageNumber].Animation[0].AnimationX;
    var yPos = data[pageNumber].Animation[0].AnimationY;
    var Scale = data[pageNumber].Animation[0].AnimationScale;
    var duration = data[pageNumber].Animation[0].AnimationDuration;
    var transition = data[pageNumber].Animation[0].AnimationTransition;
  }

  if (data[pageNumber].Page != 'Seventeen') {

    gsap.to(".animation-container .lottie-env", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out" });

    // animation transition question Lottie
    if (data[pageNumber].Page == 'five') {

      gsap.set("#lottie5", { opacity: 0 });
      gsap.to("#lottie5", { opacity: 1, duration: 1, ease: "sine.out" });

    } else if (data[pageNumber].Page == 'seven') {
      $("#lottie5").removeAttr('style');
      gsap.set("#lottie6", { opacity: 0 });
      gsap.to("#lottie6", { opacity: 1, duration: 1, ease: "sine.out" });

    } else if (data[pageNumber].Page == 'nine') {
      $("#lottie6").removeAttr('style');
      gsap.set("#lottie7", { opacity: 0 });
      gsap.to("#lottie7", { opacity: 1, duration: 1, ease: "sine.out" });


    } else if (data[pageNumber].Page == 'eleven') {
      $("#lottie7").removeAttr('style');
      gsap.set("#lottie8", { opacity: 0 });
      gsap.to("#lottie8", { opacity: 1, duration: 1, ease: "sine.out" });
    } else if (data[pageNumber].Page == 'thirteen') {
      $("#lottie8").removeAttr('style');
      gsap.set("#lottie13", { opacity: 0 });
      gsap.to("#lottie13", { opacity: 1, duration: 1, ease: "sine.out" });
    } else if (data[pageNumber].Page == 'fifteen') {
      $("#lottie13").removeAttr('style');
      gsap.set("#lottie14", { opacity: 0 });
      gsap.to("#lottie14", { opacity: 1, duration: 1, ease: "sine.out" });

    }

  }

}

function displayOutro(data, pageNumber) {

  if (window.matchMedia('(max-width: 767px)').matches) {
    $('.animation-container').addClass('hidden');
    displayCasestudyLinks();

  } else {

    // animation step 1 - text container h2 - fades in 
    gsap.to(".text-container", { y: '4%', autoAlpha: 0, duration: 1, ease: "power3.out" });

    // animation step 4 - text fades in 
    gsap.to(".solution-container", { y: '-10%', autoAlpha: 0, duration: 1, ease: "sine.out" });
    // animation step 5 - button fades in 
    //gsap.to(".header-container", { autoAlpha:0, duration: 1, ease: "sine.out"});

    var tl = gsap.timeline();
    tl.to(".animation-container .lottie-env", { duration: 0.8, x: '57%', y: '82%', scale: 1, ease: "none" })
      .to(".animation-container .lottie-env", { duration: 0.5, x: '71%', y: '100%', scale: 1.3, ease: "none" })
      .to(".animation-container .lottie-env", { duration: 0.4, x: '59%', y: '67%', scale: 1.5, ease: "none", onComplete: startFinalAnim })
      // .to(".animation-container .lottie-env", {duration: 0.5, x: '43%', y: '55%', ease: "none"})
      .to(".animation-container .lottie-env", { duration: 5, x: '-127%', y: '55%', ease: "sine.in", onComplete: startFinalDot })
      .to(".animation-container .lottie-env", { duration: 0, x: '-17%', y: '39%', ease: "sine.in" })
      .to(".animation-container .lottie-env", { duration: 5, x: '-9%', y: '-51%', scale: 2, ease: "none", onComplete: displayCasestudyLinks });

    gsap.to("#lottie", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie1", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie2", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie3", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie4", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie5", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie6", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie7", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie8", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie9", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie10", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie11", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie12", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie13", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie14", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie15", { autoAlpha: 0, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie16", { autoAlpha: 1, duration: 1, delay: 0.3, ease: "sine.out" });
    gsap.to("#lottie16", { autoAlpha: 0, duration: 0.1, delay: 6.5, ease: "sine.out" });
    gsap.to("#lottie17", { autoAlpha: 1, duration: 0.1, delay: 6.5, ease: "sine.out" });


  }

}

function startFinalAnim() {
  console.log('callback');
  animation16.playSegments([0, 450], true);


};

function startFinalDot() {
  console.log('callback');
  animation17.playSegments([0, 300], true);
  $(".casestudy-link-container").removeClass('hidden');
  $(".casestudy-text-container").removeClass('hidden');
  $('.master-container').removeClass('big-content');

  gsap.set(".casestudy-text-container h2", { autoAlpha: 0 });
  gsap.to(".casestudy-text-container h2", { autoAlpha: 1, duration: 1, delay: 2, ease: "power2.out" });

  gsap.set(".download-container", { y: "100%", autoAlpha: 0 });
  gsap.to(".download-container", { y: 0, autoAlpha: 1, duration: 1, delay: 2.5, ease: "power2.out" });

  gsap.set(".download-container img", { y: "100%", autoAlpha: 0 });
  gsap.to(".download-container img", { y: 0, autoAlpha: 1, duration: 1, delay: 2.8, ease: "power2.out" });

  gsap.set(".retake", { autoAlpha: 0 });
  gsap.to(".retake", { autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });

  // Move the casestudy dots
  gsap.set("#arab", { top: '102%', autoAlpha: 0 });
  gsap.to("#arab", { top: '19%', autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });
  gsap.set("#spotify", { top: '92%', autoAlpha: 0 });
  gsap.to("#spotify", { top: '22%', autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });
  gsap.set("#justeat", { top: '82%', autoAlpha: 0 });
  gsap.to("#justeat", { top: '51%', autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });
  gsap.set("#zulily", { top: '102%', autoAlpha: 0 });
  gsap.to("#zulily", { top: '56%', autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });
  gsap.set("#paypal", { top: '92%', autoAlpha: 0 });
  gsap.to("#paypal", { top: '68%', autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });
  gsap.set("#brandfolder", { top: '102%', autoAlpha: 0 });
  gsap.to("#brandfolder", { top: '80%', autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });
  gsap.set("#ticket", { top: '92%', autoAlpha: 0 });
  gsap.to("#ticket", { top: '86%', autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });

  // Move the casestudy dots
  gsap.set(".casestudy-link-container .one", { top: '92%', autoAlpha: 0 });
  gsap.to(".casestudy-link-container .one", { top: '16%', autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2.out" });
  gsap.set(".casestudy-link-container .two", { top: '82%', autoAlpha: 0 });
  gsap.to(".casestudy-link-container .two", { top: '16%', autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2.out" });
  gsap.set(".casestudy-link-container .three", { top: '72%', autoAlpha: 0 });
  gsap.to(".casestudy-link-container .three", { top: '51%', autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2.out" });
  gsap.set(".casestudy-link-container .four", { top: '92%', autoAlpha: 0 });
  gsap.to(".casestudy-link-container .four", { top: '42%', autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2.out" });
  gsap.set(".casestudy-link-container .five", { top: '82%', autoAlpha: 0 });
  gsap.to(".casestudy-link-container .five", { top: '73%', autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2.out" });
  gsap.set(".casestudy-link-container .six", { top: '92%', autoAlpha: 0 });
  gsap.to(".casestudy-link-container .six", { top: '70%', autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2.out" });
  gsap.set(".casestudy-link-container .seven", { top: '82%', autoAlpha: 0 });
  gsap.to(".casestudy-link-container .seven", { top: '86%', autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2.out" });
};

function displayCasestudyLinks() {

  gsap.to("#lottie17", { autoAlpha: 0, duration: 0.5, ease: "sine.out" });

  $('.master-container').addClass('case-pop');

  if (window.matchMedia('(max-width: 767px)').matches) {
    $(".casestudy-link-container").removeClass('hidden');
    $(".casestudy-text-container").removeClass('hidden');

    gsap.set(".casestudy-text-container h2", { autoAlpha: 0 });
    gsap.to(".casestudy-text-container h2", { autoAlpha: 1, duration: 1, delay: 2, ease: "power2.out" });

    gsap.set(".download-container", { y: "100%", autoAlpha: 0 });
    gsap.to(".download-container", { y: 0, autoAlpha: 1, duration: 1, delay: 2.5, ease: "power2.out" });

    gsap.set(".retake", { autoAlpha: 0 });
    gsap.to(".retake", { autoAlpha: 1, duration: 1, delay: 3, ease: "power2.out" });

    // Move the casestudy dots in MOBILE
    gsap.set("#arab", { top: '102%', autoAlpha: 0 });
    gsap.to("#arab", { top: '36%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set("#spotify", { top: '92%', autoAlpha: 0 });
    gsap.to("#spotify", { top: '34%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set("#justeat", { top: '82%', autoAlpha: 0 });
    gsap.to("#justeat", { top: '44%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set("#zulily", { top: '102%', autoAlpha: 0 });
    gsap.to("#zulily", { top: '50%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set("#paypal", { top: '92%', autoAlpha: 0 });
    gsap.to("#paypal", { top: '55%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set("#brandfolder", { top: '102%', autoAlpha: 0 });
    gsap.to("#brandfolder", { top: '61%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set("#ticket", { top: '92%', autoAlpha: 0 });
    gsap.to("#ticket", { top: '64%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });

    // Move the casestudy dots in MOBILE
    gsap.set(".casestudy-link-container .one", { top: '92%', autoAlpha: 0 });
    gsap.to(".casestudy-link-container .one", { top: '9%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set(".casestudy-link-container .two", { top: '82%', autoAlpha: 0 });
    gsap.to(".casestudy-link-container .two", { top: '16%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set(".casestudy-link-container .three", { top: '72%', autoAlpha: 0 });
    gsap.to(".casestudy-link-container .three", { top: '39%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set(".casestudy-link-container .four", { top: '92%', autoAlpha: 0 });
    gsap.to(".casestudy-link-container .four", { top: '44%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set(".casestudy-link-container .five", { top: '82%', autoAlpha: 0 });
    gsap.to(".casestudy-link-container .five", { top: '60%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set(".casestudy-link-container .six", { top: '92%', autoAlpha: 0 });
    gsap.to(".casestudy-link-container .six", { top: '70%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
    gsap.set(".casestudy-link-container .seven", { top: '82%', autoAlpha: 0 });
    gsap.to(".casestudy-link-container .seven", { top: '69%', autoAlpha: 1, duration: 1, delay: 1, ease: "power2.out" });
  }


  $(".text-container").addClass('hidden');
  $(".solution-container").addClass('hidden');

  gsap.set(".cursor__ball--big", { x: '47vw', y: '20vh', scale: 1.9 });
  gsap.set(".cursor__ball--small", { x: '47.5vw', y: '20.5vh', scale: 2 });
  $('.cursor').addClass('active');

  // setTimeout( 
  //     function(){ 
  //         $('.cursor').removeClass('active');
  //         gsap.set(".cursor__ball--big", { scale:1}); 
  //         gsap.set(".cursor__ball--small", { scale:1});
  //     }, 2000 );

  // $( ".option" ).mouseover(function() {
  //     gsap.to(bigBall, { scale: 1.75, duration: 0.3, ease: "none"} );
  //     $('.cursor').addClass('active');
  // })


  // $( ".option" ).mouseleave(function() {
  //     gsap.to(bigBall, { scale: 1, duration: 0.3, ease: "none"} );
  //     $('.cursor').removeClass('active');
  // })


};

// $( ".case a" ).on( "click", function() {

//     var numberShow = 7;

//     for (var i = 0; i < numberShow; i++) {
//         $('.casestudy-link-container .case').eq(i).addClass('hidden');
//     }

//     var imageMove = $(this).parent();
//     $(imageMove).removeClass('hidden');
//     $(this).addClass('hidden');
//    // displayCasestudyText(data, pageNumber, caseStudy);
//    gsap.to(imageMove, { top:'0%', left: '-9%', backgroundSize: '100%',rotation: 45, scale: 3, duration: 1.5, ease: "power3.out"});
//    //gsap.to(".casestudy-link-container", { autoAlpha:0, duration: 1, ease: "power3.out"});

//    var customer = data[pageNumber].SolutionTypetext[0].Casestudy[0].Customer;
//    var Headline = data[pageNumber].SolutionTypetext[0].Casestudy[0].Headline;
//    var Body = data[pageNumber].SolutionTypetext[0].Casestudy[0].Body;
//    var KeyStats = data[pageNumber].SolutionTypetext[0].Casestudy[0].KeyStats;
//    var Quote = data[pageNumber].SolutionTypetext[0].Casestudy[0].Customer;
//    $( ".casestudy-text-popup-container" ).removeClass('hidden');
//    $( ".casestudy-text-popup-container" ).html(Headline+"<div class='body-container'>"+Body+"</div>"+KeyStats+Quote);
//    $( ".casestudy-text-container h2" ).addClass('hidden');

// });

$("a.retake").on("click", function () {

  location.reload()

});




function displayCasestudyText(data, pageNumber, caseStudy) {

  gsap.to(".case img", { x: 0, y: 0, rotation: 1, scale: 3, duration: 1.5, ease: "power3.out" });

};

window.addEventListener("resize", windowResizeFunction);


function windowResizeFunction() {
  console.log('windowResizeFunction');



  var newWidth = window.innerWidth;
  var quizContainWidth = $(".cx-blade-bgcolor-F5F6F9").width();
  var widthQuizCont = quizContainWidth * 5;

  $(".quiz-container-slider").css("width", widthQuizCont);

}