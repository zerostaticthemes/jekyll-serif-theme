---
title: "Analyzing Clinical Signs (Group)"
date: 2018-11-18T12:33:46+10:00
featured: true
weight: 1
layout: scope
---

<p style='text-align: justify;'>
This explains our overall research project including research problem, literature review ,objectives ,methodology, research gap etc. 
</p>

<p style='text-align: justify;'>
Pneumonia, lung cancer and bone abnormalities are the diseases that arise mostly at present and X-ray is mostly used as a major screening tool that can be used for diagnosing various range of diseases.. Effective diagnosis is a significant consideration about the effective phase of treatment. In fact, a specialist radiologist may detect the disease from chest X-ray images. In certain purposes, the diagnosis may be ambiguous, such as the presence of illness that may be vague in chest X-ray pictures or may be confusing with other diseases and can be time consuming. Hence, computer-aided diagnostic systems are required to direct the clinicians, increasing the accuracy without any delay or any resource inefficiency particularly in isolated areas. In the current world there is no system to access X-ray images and patient’s details remotely. So this research mainly suggests a web application with a model of convolution neural network (CNN), designed without any planning for grouping and distinguishing the incidence of pneumonia, lung cancer and bone abnormalities from a given set of X-ray image samples. This model could help to mitigate the effectiveness and daunting difficulties often encountered in handling therapeutic issues. In this paper,The CNN algorithm and different data augmentation strategies were used to boost the classification accuracies to maximize the efficiency that will help to enhance the validity and training accuracies and to classify the precision of the CNN model and to achieve various outcomes. This work was performed using python language and has shown better results. 
</p>

## Literature Survey

<p style='text-align: justify;'>
Convolutional Neural networks (CNN) has been a hot topic in deep learning and image classification and recognition studies and due to that it has become a widely used classification technique for medical image analysis. CNN techniques have begun widely used by medical research because it has the ability to handle large, unstructured data. 
	CNNs started to trend around 2012 when AlexNet was first introduced with an 8 layer neural network. Also these are more efficient than the machine learning algorithms and when it comes to large datasets it has been more efficient than other machine learning approaches. To name a few this has been used for the Digital mammographic tumor classification, Brain Tumor Segmentation using MRI images, Skeletal bone age assessments to help the diagnosis of endocrine and metabolic disorders in child development. Most of the papers have been compared to other approaches to the CNN model and most of the approaches failed to reach the accuracy that CNN model have been able to achieve. In the Chest Diseases Detection using X-rays they used the competitive neural network (CNN) and backpropagation neural network (BPNN) carried out along with the CNN. They also found that CNN would give a higher accuracy rate than other models on the larger datasets and when it has more and more iterations through the data. That would mean even though training time will be higher than other networks it is capable of giving a better model in a reasonable time scale.
	There are quite a few ways to go with image classification and feature detections on the X-rays without using CNN. To name a few there are Artificial Neural Networks (ANN), Support Vector Machines (SVM), Bayesian Networks (BN). For using any of these techniques or any other technique actually based on the situation you are dealing with. It is not easy to decide whether a technique would be better for the situation and would give most accuracy. It would depend on number or scenario related factors.
	In Bayesian image classification, it uses a feature set and label set for the learning of the classification. Also the classification is dependent on probability of the features of said image, corresponding to the probabilistic label from the training data. Classification would consider a feature as non-dependent from the other features. Using this classification algorithm for medical images need to preprocess the data carefully, then feature extractions which will get the reduced dimensional data into the classification algorithm. As proposed by the paper this algorithm mostly works well with the problems that include multiple classes. It is not usually for the medical image classification excluding some extra ordinary scenarios.
	Support vector machines can be used for the medical images that can be classified into two classes. For example if an X-ray can be classified as normal and abnormal classes. We could perform classification of the classes by finding the hyper-plane that differentiates the two classes very well. This classification can be linear or nonlinear. Recently this was used to classify Diabetes Mellitus, Lung Nodule Detection from CT scan images and many more. Papers get better results using SVM classification technique rather than linear classification types. Using SVM as the classification most of the models were able to reach an accuracy of around 80%. 
	Artificial neural networks (ANN) another deep learning algorithm that also could be used for the image classification tasks. But as image size is increasing, the number of trainable parameters increases drastically. That would mean if the size of the image is 224*224, then the number of trainable parameters would be huge even when the model comes to the first hidden layer. That many neurons would be very hard to handle and train. 
	Regardless of the time variable that it has to train under, CNN is the one of the best image classification algorithm todate. It also is able to segmentation and analyze images with ease. Even best algorithms have some downsides So that CNN is higher relaying on the system resources, which would consume large computational time for the system resulting in an overhead. We can overcome these computational issues with some clever optimization methods such as memory access optimization and near data processing. 
	There are few bone disorder detection papers specified in lower extremity radiographs. As research is focused on the lower body parts, areas the paper covers are the foot, hip, ankle and the knee of the human body. Their dataset includes more than 90000 of images collected from more than 13000 patients. They build their model using three separate CNN model architectures: DenseNet161, ResNet101 and ResNet50. As our bone abnormality detection focused on upper extremity X-ray images this is a good example of the type of research we are conducting. By their DenseNet CNN model they were able to achieve the AUC-ROC of 0.880 on the classification task. They concluded that a single CNN model could effectively and efficiently identify any abnormalities of X-ray radiographs of multiple body parts. In a paper published in 2019 of the 5th International Conference on Advances in Electrical Engineering does use the same dataset we have been using for the research to create detection models using CNN architectures. They have approached the problem using VGG-19 and ResNet architectures to build models for using only 4 study types out of 7 study types. They also used a 5-fold cross-validation method to evaluate their developed models using above architectures. ANd the they have created an ensemble model combining the two resulting models from the VGG-19 architecture and ResNet architecture. We wanted to create an ensemble model using all of the study types, and with a higher percentage of accuracy.
	Cloud computing is one of the most talked about topics nowadays as its potential is so high. Every industry that has an online presence for some reason would be able to use cloud computing to do their computational needs in a more efficient and cost effective way. Elimination of the cost to keep the servers, power supply, cooling equipment network engineers are some benefits that cloud computing brings on. So there no is no surprise that cloud computational power would be a massive positive change for machine learning  and deep learning algorithms. Alibaba, AWS sagemaker, Google Cloud and Kaggle are some of the providers that provide computational needs for machine learning, deep learning, etc.

</p>

## Rsearch Gap

<p style='text-align: justify;'>
Several types of researches have been done for the past few years about the systems
that can detect presence of pneumonia and cancers in the lungs and bone abnormalities. When considering the previous
researches, we found certain limitations and future works. Therefore, we propose a
system in order to overcome above-mentioned limitations and come up with a new
product with improved features.</p>

#### Solving the problem of small dataset

<p style='text-align: justify;'>
Unlike other deep learning classification tasks with sufficient image repository,
specially it is difficult to obtain a large amount of pneumonia classification tasks ;
therefore, several data augmentation algorithms are deployed to improve the
validation and classification accuracy. But in the few of previous researches., they
have developed a algorithms to solve the problem of small dataset.
</P>

#### Access through the internet.

<p style='text-align: justify;'>

In the previous researches, they have developed only a model to classify and detect
the presence of pneumonia, lung cancer and bone abnornalities in the human Body, but We implement the product with a
web viewer for classifying tasks. Furthermore, the System is developed to store
patient’s details and diagnosis in a PACS server. So that the Physician and patient
can view information about presence of the pneumonia, lung cancer and bone abnornalities  efficiently in anywhere .It
helps to increase the access area to medical imaging expertise in parts of the world
where access to skilled radiologists is limited.

</p>

#### Efficiency
<p style='text-align: justify;'>


Several data augmentation algorithms are deployed to improve the classification
accuracy. In the Some of the previous systems addressed these feature. In our system
this is done in the preprocessing and data augmentation stage by doing such as
decreasing image size.
</p>

#### Web application

<p style='text-align: justify;'>

Create a web application that is able to see the X-ray radiographs that are detected by the models and view them in an interface that is made to view medical images. This is a major part of the research to have applications that could access through the internet which would make products more accessible. Web application makes it a much more attractive product and makes a good impression to potential buyers. 

</p>
#### Overfitting Problem.

<p style='text-align: justify;'>

Several data augmentation methods to artificially increase the size and quality of the
dataset. This process helps in solving overfitting problems. But the most of previous
researches haven’t addressed about this problem.

</p>

## Research Problem

<p style='text-align: justify;'>
X-ray plays an important role in the human life. because X-Rays can be widely used
for diagnosing so many abnormalities in the human body. Cysts Tumors, Asthma
Cancers, Heart failure, Fractures, Lung diseases and conditions are some of them. but,
At global level according to the latest estimates from the WHO .Each year in the
United States, more than 250,000 people have to seek care in a hospital due to
pneumonia, unfortunately, about 50,000 people die each year from the disease in the
United States. According to the latest estimates from the WHO. Lung cancer is a
leading cause of death worldwide, accounting for an estimated 1.76 million and deaths
2.09 million cases[2]. According to these information huge number of people are
suffering and dead in lung cancer, bone abnormalities and pneumonia in the lungs. Vaccines
and appropriate treatment (like antibiotics and antivirals) can prevent many of these
deaths[1]. The reason for large amount of deaths that in some regions, like in Africa’s
57 nations, a gap of 2.3 million doctors and nurses exists [3, 4]. That main reason for
the poverty of the radiologists is happening because the process of reading a X-ray
can be time consuming for some reasons such as the appearance of disease which can
be unclear in chest X-ray images and can be confused with other diseases.
</p>


* In computer-aided systems , there are no web viewers which are classifying
and detecting lung cancers, bone abnormalities and pneumonia in the lungs. 

* No product that has the detecting lung cancers, bone abnormalities and 
pneumonia in the lungs and processes in one.

* The working area of the radiologist has limited due to time consuming things.Patient can meet the physician only at the time duration of the appointments
and There is a no possible way to assess it at home to physician and radiologist,
if there is a immediate situation. 

* The working area of the radiologist has limited due to time consuming things.

* If the radiologist has to leave from the hospital , then there is a no way to
diagnose for a very sick person


## Research Objectives

### Main Objectives

<p style='text-align: justify;'>
The main objectives of the proposed system are to support to radiologists for timely
accessing to treatment and saving much needed time and money in order to already
experiencing radiologist’s poverty by producing a web viewer to detect cancer in the
lungs, bone abnormalities and presence of pneumonia using deep
learning approaches.
</p>

### Specific Objectives

#### Lung Cancer prediction in Chest X-rays Using DICOM Images

* Increasing the accuracy of the reading X-ray to detect the presence of
lung cancers.

* Increasing the efficiency of the reading X-ray to detect the presence of lung
cancers.

#### Bone Abnormality Detection using X-Ray DICOM Images


* To create a system to support radiologists for their work by detecting bone
abnormalities from X-ray images automatically with any human intervention by
using deep learning algorithms with hassle free web viewer for remote access
to the system. 

* Create commercially viable final product that can be used in many hospitals as well
as improving the radiology health informatics landscape for the good.

* Reduce the time for bone abnormality detection.

#### Classifying and detecting the pneumonia from a collection of chest X-ray Images.

* Construct a accurate and efficient computer-aided system using convolutional
neural network model trained from scratch to classify and detect the presence of
pneumonia from a collection of chest X-ray image samples. This system allows to radiologist to detect and send the report to physician remotely.

* Reduce the time for pneumonia detection. 

* Increase the accuracy of the pneumonia detections 

## Methodology

##  Technologies

### CNN Model for detections: Python

<p style='text-align: justify;'>
Python was used as the main programming language mainly due to its extensive
selection of libraries and frameworks focusing on machine learning , the simple syntax
helps to collaborate with the rest of the team members, concise readable code,
extensive support from high quality documentation and active community of
developers that offer assistance. CNN was constructed using python and deployed
using python flask in the backend. Few main libraries were used as shown in figure 3
to implement and it’s explained in next sub section
</p>

* Keras

> <p style='text-align: justify;'>
Keras is a powerful and easy-to-use free open source Python library for developing and
evaluating deep learning models. It wraps the efficient numerical computation libraries
Theano and TensorFlow and allowed us to define and train neural network models in
just a few lines of code. So that keras was used us to train the CNN and preprocess
the image dataset
> </p>

* OpenCv

> <p style='text-align: justify;'>
OpenCv was used to resize images for a same size as shown in figure 6, as training
datasets,testind and inserting image in the real world can be different sizes.
> </p>

### Orthanc

<p style='text-align: justify;'>
Orthanc is a dicom server which can be stored dicom images and meta data
with patient, physician details. We used it for storing dicom images and
metadata.
</p>

### Prediction API-Python Flask
<p style='text-align: justify;'>
Flask is a lightweight WSGI web application framework. It is designed to make getting
started quick and easy, with the ability to scale up to complex applications. Also there
are many extensions provided by the community that make adding new functionality
easy.So that python flask was used to return the details of the result to the frontend.
</p>

### DICOM Viewer with AI prediction -react JS
<p style='text-align: justify;'>
React js was selected to implement the front end as it is Easy to Learn ,Use and  creating Dynamic Web Applications Becomes Easier.And the react JS has  reusable components.So that it makes more easier to extend the application with new features for future developments.So that react JS was used to implement the viewer with 
AI prediction feature for X-ray Images
</p>        

