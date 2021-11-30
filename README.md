# Payment API

## Project setup
```
What would you add to your solution if you had more time?
- I wil implement the authentication autorization mechanism, Payout Time, Multiple currencies, Capture, Refund, Recurring etc
   .
What's your favourite programming language? Why?
- Java, C#, Python, perl, shell, javascipt, Goland
I love coding so I like these programming langugaes in building higly scalable products

How would you track down a performance bottleneck in an application? Have you ever had to do this?
- I have done this many times. I mostly look below items:
*Response Time, Throughput, and Error Rates
*Application Histograms & Percentiles
*Most Time-Consuming Transactions
*Performance of External Services
*Thread Profile
*Cross Application Tracing
*Transaction Breakdown
*Database Monitoring

How would you deploy your API in a production environment?
- I prefer Serverless production deployment
*Deploy API service to a platform that is secure, scalable and highly available
*Set up logging, monitoring and tracing to keep your API service up and running
*Set up quotas and traffic management policies to control overflows
*Set up data analytics to gather usage insights
*Provide easy-to-understand documentation and supporting materials

Please describe yourself using either XML or JSON.
-
There are many libraries that will help you serializing and deserializing your data in XML or JSON. 
CSV is not so popular anymore, so you may need to do everything yourself. 
On top of that, both XML and JSON are probably easier to read for a human, which makes debugging easier and faster (i.e. cheaper).
Usually developer time (i.e. costs) is a much bigger constraint than disk space or bandwidth use, 
so most people will use XML or JSON. Using one or the other is a matter of which libraries you are most familiar with or 
even cultural reasons (Java and Scala people tend to use XML, Javascript people tend to use JSON). 
XML is more verbose (i.e. more disk, more bandwidth), but not to the point of being a problem in most modern projects.
```

## Input data
Input data is given in JSON file. Performed operations are given in that file. In each object following data is provided:
```js
{
    "date": "2016-01-05", // operation date in format `Y-m-d`
    "client_id": 1, //client_id, integer
	"ref_no": 1234, //ref_no, integer
    "user_type": "natural", // user type, one of “natural”(natural person) or “juridical”(legal person)
    "type": "cash_in", // operation type, one of “cash_in” or “cash_out”
    "operation": {
        "amount": 200, // operation amount(for example `2.12` or `3`)
        "currency": "EUR" // operation currency `EUR`
    }
}
```
