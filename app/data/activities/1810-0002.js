const templates = require("./templates")

module.exports = {
  activities: [
    templates.commentAdded({
      commentText: "Needs addressing asap - we're nearly at the end of SLA",
      author: "Tim Harwood",
      date: "16/10/2018"
    }),
    {
      title: "Product recall requested",
      action: "Corrective action recorded",
      html: `
      <p class="govuk-body">
        Product: <span class="govuk-!-font-weight-bold">Charge Worx 931L</span><br />
        Legislation: <span class="govuk-!-font-weight-bold">General Product Safety Regulations 2005</span><br />
        Business responsible: <span class="govuk-!-font-weight-bold">Charge Worx</span><br />
        Date decided: <span class="govuk-!-font-weight-bold">12/9/2018</span><br />
        Attached: <span class="govuk-!-font-weight-bold">notice-of-enforcement.pdf</span>
      </p>
      <p class="govuk-body">Description supplied by user goes here, in a paragraph</p>
      <a href="/product" class="mspsds-block-link">View product</a><a href="/product" class="mspsds-block-link">View business</a>
      <a href='#attachements'>View attachement</a>`
    },
    {
      title: "Failed test: Travel plug adaptor — Charge Worx 931L",
      action: "Test failure recorded",
      html: `
      <p class="govuk-body">
        Legislation: <span class="govuk-!-font-weight-bold">General Product Safety Regulations 2005</span><br />
        Test date: <span class="govuk-!-font-weight-bold">12/9/2018</span><br />
        Attached: <span class="govuk-!-font-weight-bold">test-results.pdf</span>
      </p>
      <p class="govuk-body">Description supplied by user goes here, in a paragraph</p>
      <a href="/product" class="mspsds-block-link">View product</a>
      <a href='#attachements'>View attachement</a>`
    },
    {
      title: "Test requested: Travel plug adaptor — Charge Worx 931L",
      action: "Testing requested",
      html: `
      <p class="govuk-body">
        Legislation: <span class="govuk-!-font-weight-bold">General Product Safety Regulations 2005</span><br />
        Date requested: <span class="govuk-!-font-weight-bold">12/9/2018</span><br />
        Attached: <span class="govuk-!-font-weight-bold">test-request-form.pdf</span>
      </p>
      <p class="govuk-body">Description supplied by user goes here, in a paragraph</p>
      <a href="/product" class="mspsds-block-link">View product</a>
      <a href='#attachements'>View attachement</a>`
    },
    {
      title: "Discussion with Charge Worx brand ambassadors",
      action: "Meeting recorded",
      html: `
      <p class="govuk-body">
        Meeting with: <span class="govuk-!-font-weight-bold">Jeff Lebowski, Wilma Flintstone, Terry Crews</span><br />
        Date: <span class="govuk-!-font-weight-bold">12/9/2018</span><br />
        Attached: <span class="govuk-!-font-weight-bold">transcript.doc</span>
      </p>
      <p class="govuk-body">The Charge Worx brand ambassadors wanted to discuss the enforcement procedure with us, and assured us that... <a href="#">View more</a></p>
      <a href='#attachements'>View attachement</a>`
    },
    {
      title: "Jacqui Simmons at Warwickshire TS responds",
      action: "Email recorded",
      html: `
      <p class="govuk-body">
        From: <span class="govuk-!-font-weight-bold">Jacqui Simmons</span> (jacqui.simmons@warwicks.gov.uk)<br />
        Date sent: <span class="govuk-!-font-weight-bold">12/9/2018</span><br />
        Email: <a href="#">RE: More details about Charge Worx case.html</a><br />
        Attached: <span class="govuk-!-font-weight-bold">explosion_damage.jpg</span>
      </p>
      <a href='#attachements'>View attachement</a>`
    },
    {
      title: "Asked Jacqui Simmons at Warwickshire TS for further details",
      action: "Email recorded",
      html: `
      <p class="govuk-body">
        To: <span class="govuk-!-font-weight-bold">Jacqui Simmons</span> (jacqui.simmons@warwicks.gov.uk)<br />
        Subject: <span class="govuk-!-font-weight-bold">More details about Charge Worx case</span><br />
        Date sent: <span class="govuk-!-font-weight-bold">12/9/2018</span><br />
        Attached: <span class="govuk-!-font-weight-bold">not-a-virus.exe</span>
      </p>
      <p class="govuk-body">Hi Jacqui, Thanks again for contacting us about the problems with the Charge Worx travel adaptor. I have some... <a href="#">View more</a></p>
      <a href='#attachements'>View attachement</a>`
    },
    {
      title: "Reporter asking for progress report",
      action: "Phonecall recorded",
      html: `
      <p class="govuk-body">
        Call with: <span class="govuk-!-font-weight-bold">Mina Harker</span> (07123 123123)<br />
        Date: <span class="govuk-!-font-weight-bold">12/9/2018</span><br />
        Attached: <span class="govuk-!-font-weight-bold">transcript.doc</span>
      </p>
      <p class="govuk-body">Mina was wondering whether there was any update on the Charge Worx case. I assured her that we were looking into it... <a href="#">View more</a></p>
      <a href='#attachements'>View attachement</a>`
    },
    {
      title: "Deleted: Photo ID",
      action: "Image deleted",
      html: `
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <img src="public/images/placeholder.png" style="cursor:pointer" title="click to view full size" />
        </div>
        <div class="govuk-grid-column-two-thirds">
          <p class="govuk-body">Image description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>`
    },
    {
      title: "Updated: Photo ID (was: picture of product in situ)",
      action: "Image details updated",
      html: `
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <img src="public/images/placeholder.png" style="cursor:pointer" title="click to view full size" />
        </div>
        <div class="govuk-grid-column-two-thirds">
          <p class="govuk-body">Image description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>`
    },
    {
      title: "picture of product in situ",
      action: "Image added",
      html: `
      <div class="govuk-grid-row">
        <div class="govuk-grid-column-one-third">
          <img src="public/images/placeholder.png" style="cursor:pointer" title="click to view full size" />
        </div>
        <div class="govuk-grid-column-two-thirds">
          <p class="govuk-body">Image description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>`
    },
    {
      title: "Deleted: Investigation report",
      action: "Document deleted",
      html: `
      <p class="govuk-body">New document description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      <a href="#">View PDF document</a>`
    },
    {
      title: "Updated: Investigation report (was: Investigation details)",
      action: "Document details updated",
      html: `
      <p class="govuk-body">New document description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      <a href="#">View PDF document</a>`
    },
    {
      title: "Investigation details",
      action: "Document added",
      html: `
      <p class="govuk-body">Document description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      <a href="#">View PDF document</a>`
    },
    {
      title: "Removed: Travel plug adaptor — Charge Worx 931L",
      action: "Product removed",
      html: `
      <a href="/product" class="mspsds-block-link">View product details</a>`
    },
    {
      title: "Travel plug adaptor — Charge Worx 931L",
      action: "Product added",
      html: `
      <a href="/product" class="mspsds-block-link">View product details</a>`
    },
    {
      title: "Tesco PLC",
      action: "Business added",
      html: `
      <p class="govuk-body">Role: <span class="govuk-!-font-weight-bold">Distributor</span></p>
      <a href="/business" class="mspsds-block-link">View business details</a>`
    },
    {
      title: "Case Reopened",
      action: "",
      text: "Rationale comment goes here"
    },
    {
      title: "Case Closed",
      action: "",
      text: "Rationale comment goes here"
    },
    {
      title: "Assigned to Nick Golding",
      action: "Assigned"
    },
    {
      title: "Laceration injury",
      action: "Incident added",
      html: `
    <p class="govuk-body">Incident description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p class="govuk-body">
      Occurred: <span class="govuk-!-font-weight-bold">24/9/2018</span><br />
      Affected party: <span class="govuk-!-font-weight-bold">36-year old woman</span><br />
      Location: <span class="govuk-!-font-weight-bold">Rotherham</span>
    </p>
    <p class="govuk-body"><a href="#">View risk assessment document</a></p>`
    },
    {
      title: "Danger of electric shock",
      action: "Hazard added",
      text: "Hazard description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Danger of electric shock",
      action: "Hazard added",
      html: `
      <p class="govuk-body">Hazard description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="govuk-body">
        Risk level: <span class="govuk-!-font-weight-bold">Medium</span><br />
        Vulnerable group: <span class="govuk-!-font-weight-bold">Young children</span>
      </p>
      <p class="govuk-body"><a href="#">View risk assessment document</a></p>`
    },
    {
      title: "Priority: High",
      action: "Set",
      text: `Have flagged as priority due to consumer injuries and potential risks of the product`
    },
    {
      title: "Consumer report",
      action: "Report details added",
      html: `
      <p class="govuk-body">
        Name: <span class="govuk-!-font-weight-bold">Mina Harker</span><br />
        Phone number: <span class="govuk-!-font-weight-bold">07123 123123</span><br />
        Email address: <span class="govuk-!-font-weight-bold">mina@castledracula.ro</span>
      </p>
      <p class="govuk-body">Other details captured during the report entry</p>`
    }
  ]
}