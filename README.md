# 🐱 Purrfect-Match 
![Screen Shot 2022-10-21 at 8 05 05 pm](https://user-images.githubusercontent.com/91517809/197158083-b635ba85-3b88-47c7-8461-aebc5e036f7d.png)


## 🐾 Welcome! 

Great to see you here. Thank you for having a look at at the repo for **PurrfectMatch**. 

## 🐈‍⬛ About the project

As cat (and animal) lovers, we know how important is to find your purrfect cat and for the cat to find their dream owner(s).

So we decided to create web app for use by pet shelters to match with potent potential owners. That's how **PurrfectMatch** came to life! 

The purpose of this app is: 
* To simplify the process of accurately matching pets with potential owners based on the pet’s requirements and the owner’s lifestyle. 

Ideally this would:
 - reduce the likelihood of pets going home with incompatible owners and/or returning of pets to shelters.
- increase human confidence in their pet choice leading to higher adoption rates
- decrease staff/volunteer time needed in the matching process


## 🐁 How to run this app

> Step 1 - Clone the repo locally using this command 
```
git clone https://github.com/chiaracaprasi/purrfect-match.git
```
> Step 2 - Navigate to the folder 
```
cd purrfect-match
```
> Step 3 - Install the required dependencies
```
npm install
```

> Step 4 - Run the React project
```
npm start
```

## 🌲 Architecture 

### Front-End

Our web app is a single-page app built using ReactJS and Javascript. 
We also used Bootstrap library for styling components and Axios library for HTTP requests. 
The app was designed with a mobile/tablet first in mind. 

#### Main Components

| Component | Description |
|-----------|-------------|
| LandingPage | The landing page a user sees when they navigate to **PurrfectMatch**. |
| Form | The quiz the user completes to match with suitable cats. |
| MatchedCats | The cats suitable for the user based on their answers to the quiz. |


### API & Back-End



### Database 

We use a MySQL database for storing the cats. There are 2 tables: details and personality, 
with details being the primary table and personality linked with a foreign key. The data that is 
matched from the quiz results are stored in personality; once a cat is matched by the core 
algorithm, data from both tables are included as an object and sent to the API.


## 🪲 Known bugs/limitations
No known bugs 
App is made to fit iPad and iPhone first so some elements in larger screen may not look as good.


## ✍🏽 Authors / The Team 

* **Chiara Caprasi** - Cat mum and passionate front-end developer 
* **Farah Mccurdy** - Cat mum and amazing jack-of-all-trades full stack developer  
* **Karoline Silva** - Soon-to-be cat mum and fabulous back-end and DevOps 
