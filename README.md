# Amazon Cloudwatch RUM

Cloudwatch RUM is a Real User Monitoring, released at re:Invent 2021. It's a tool that allows customers to get analytics from the clients web browser on what the consumers interact with their website, the experience of those interactions, and if they are seeing any errors specifically and where. It is fairly easy to setup and supports a number of frameworks. 

*This demo is meant to help you spin up a quick site that has Cloudwatch RUM configured and ready. Just walk through the README and add the CW RUM snippet to your code and start collecting interactions right away.* 

1. If you have your own stack you have access to your HTML/JS and just want to deploy Cloudwatch RUM then go [here](https://github.com/waday71/Cloudwatch-RUM-Demo/blob/main/RUMsolo.md). 

2. If you need a sample stack (example site) to use for a demo then keep reading below. 

## Deploy: 


1. Save the [Cloudwatch-RUM-Demo/CloudFormation_template.yaml](https://github.com/waday71/Cloudwatch-RUM-Demo/blob/main/CloudFormation_template.yaml) to your system and load the existing template into your CloudFormation console. 

### *Requirements:*
Deploys a Website on EC2 Autoscaling groups with a simple html/css front-end in 2 separate AZ's in a VPC. If you have a custom AMI you can replace the AMI ID with yours. 

In this CloudFormation template you will need:
- [ ] 2 Public Subnets
- [ ] VPC 
- [ ] 1 domain - *If one is not available you can point it to Cloudfront domain and later point the Origin to ALB deployed through this template* (CloudWatch RUM will not accept ALB URL) 
- [ ] Docker Hub account (free) that you can pull and push containers too. 

2. Pull the docker image with the sample html site.
```
docker pull waday71/cwrumdemo
```
3. Do a docker build and docker push to your docker hub account. 

```
docker build --platform=linux/x86_64 -t <youraccount name>/cwrumdemo .
docker push <your account name>/cwrumdemo
```

Replace string 'waday71/cwdemo' with 'your docker account/cwdemo' in the userdata section (lines 163/164). 

4. Go to CloudFormation in the AWS console 


       
       
![image](https://user-images.githubusercontent.com/35279875/221304940-8eac32a7-90e5-4bbc-b5d3-21a96a3f4ad8.png)
    
    
You will assign these to parameters that are called out in CloudFormation parameters. 
  &nbsp; <br/>
    
![image](https://user-images.githubusercontent.com/35279875/227380262-7c0782b3-2baa-4275-acba-5bb7ca6499e9.png)


   &nbsp; <br/>
 

Confirm the stack and resources have deployed under Cloudformation Stack Events. 
    

    
5. Go to Cloudwatch in the AWS Console. Under "Application Monitoring"  Search on the left for RUM. 

Identify the application monitor and click the "View JavaScript". 

&nbsp; <br/>


![image](https://user-images.githubusercontent.com/35279875/221305638-e12c572f-da36-4557-a052-5437c86015ea.png)

 &nbsp; <br/>

Click JavaScript Snippet on left column. 


![image](https://user-images.githubusercontent.com/35279875/221306808-8a02d73a-4e3b-48c2-adeb-8386315e4940.png)
    &nbsp; <br/>

6. Copy the "snippet" and paste into the <head> of your HTML or JS. 

You can choose between frameworks like HTML, Javascript, or Typescript. 

&nbsp; <br/>

![image](https://user-images.githubusercontent.com/35279875/221307956-e0cf7f46-87c2-4a31-9f02-79323f6f33b0.png)
  &nbsp; <br/>

(HTML Example): 

7. You need place snippet script in each webpage <head> to call the cwr.js to be executed on the client browser. 

 &nbsp; <br/>
![image](https://user-images.githubusercontent.com/35279875/221362683-95027d28-eb20-4db3-a849-6904b4e3d51b.png)

 &nbsp; <br/>


8. Once the snippet has been saved to your application, you can do the following commands to deploy to Docker Hub for deploying changes: 

```
docker build --platform=linux/x86_64 -t <youraccount name>/cwrumdemo .
docker push <your account name>/cwrumdemo
```
*Use your own Docker Hub account and push changes* 

## Verify       
       
Then add ALB you will find in "Outputs" of your CloudFormation template as the origin in Cloudfront domain you previously created. 

8. Click on various links and pages. 
       
Then by clicking around on the sample web site it will start sending events to CloudWatch RUM. It will start collecting user interactions that will be collected in the Cloudwatch RUM Application Monitor Overview dashboard as seen below. 

![image](https://user-images.githubusercontent.com/35279875/221317283-79c207b9-8468-4850-a032-218eec56f1d8.png)

9. See in the Developer tools the client sending events to the "dataplane"       
       
*On the Client Side*
  &nbsp; <br/>
Here you see in the developer tools, the client has been downloaded and its attempting to establish a connection with the dataplane. 
&nbsp; <br/>
<img width="666" alt="image" src="https://user-images.githubusercontent.com/35279875/221364251-6414dd1b-4dc0-430a-9386-ce9ad9338414.png">
&nbsp; <br/>

![image](https://user-images.githubusercontent.com/35279875/221364093-54f3afb5-821b-4d43-8e18-d4964fba6c12.png)
&nbsp; <br/>

## CloudWatch RUM Features

### User Journey
![image](https://user-images.githubusercontent.com/35279875/221364020-873af447-0071-4d16-9ee0-4b356197b2d1.png)
 
 [ Metrics gathered by Cloudwatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html)

[Example Cloudwatch Dashboard](https://github.com/waday71/Cloudwatch-RUM-Demo/blob/main/CloudwatchRUM-dashboard.json) Extending and collecting Cloudwatch RUM beyond the 30 days

[ Sending Custom Events to CloudWatch RUM](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-custom-events.html)
