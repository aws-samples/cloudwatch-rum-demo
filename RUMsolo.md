# Amazon Cloudwatch RUM

Instructions: 
If you already have a Stack your looking to monitor and you have access to the HTML/JS, then use the following CloudFormation template to deploy CloudWatch RUM. 

Deploy: 

1. Save the [CloudwatchRUM.yaml](https://github.com/waday71/Cloudwatch-RUM-Demo/blob/main/CloudwatchRUM.yaml) to your system and load the existing template into your CloudFormation console. 
    Confirm the Dashboard was created.
    
    ![image](https://user-images.githubusercontent.com/35279875/221304940-8eac32a7-90e5-4bbc-b5d3-21a96a3f4ad8.png)

    
3. Login to the AWS Console and go to CloudWatch. Search on the left for RUM. 

    Identify the application monitor and click the "View JavaScript". 
    
    ![image](https://user-images.githubusercontent.com/35279875/221305638-e12c572f-da36-4557-a052-5437c86015ea.png)

    Click JavaScript Snippet on left column. 
    
    ![image](https://user-images.githubusercontent.com/35279875/221306808-8a02d73a-4e3b-48c2-adeb-8386315e4940.png)

    
    Copy the "snippet" and paste into the <head> of your HTML or JS. 
    
    You can choose between frameworks like HTML, Javascript, or Typescript. 
  
    ![image](https://user-images.githubusercontent.com/35279875/221307956-e0cf7f46-87c2-4a31-9f02-79323f6f33b0.png)

    Place here eg. HTML: 
    
   You need place snippet script in each webpage HEAD to call the cwr.js to be executed on the client browser. 
    
![image](https://user-images.githubusercontent.com/35279875/221310612-d1424a89-ba81-448b-bef8-b74e32f8c0f8.png)

Confirming it is working
    
Once the snippet has been deployed to your application, it will immediately start collecting user interactions that will be collected in the Cloudwatch RUM Application Monitor Overview dashboard as seen below. 
  
   
   ![image](https://user-images.githubusercontent.com/35279875/221317283-79c207b9-8468-4850-a032-218eec56f1d8.png)
    

Benefits of using with Cloudfront 

