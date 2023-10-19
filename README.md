## :computer: Task Description:

Our company is focused on building websites based on renowned brands. Currently
 we are in search of a MERN Stack developer to develop our upcoming brand-new website.

### 🧮 Website Theme:

Here
 we have provided you a list of `7 different types of categories to build your brand-based website`. You are required to select `a single category` from the following list to build your website. Your website cannot have more than `one category type`. For instance
 if you choose `Technology and Electronics`
 your website will have products related to `Technology and Electronics` only; :x: `you cannot add other products`:x: related to Fashion and Apparel
 Food and Beverage
 etc.

- **Category 1**: `Technology and Electronics`

  - `Example`: Apple
   Samsung
   Sony
   Google
   Intel
   etc.

- **Category 2**: `Automotive`

  - `Example`: Toyota
   Ford
   BMW
   Mercedes-Benz
   Tesla
   Honda
   etc.

- **Category 3**: `Fashion and Apparel`

  - `Example`: Nike
   Adidas
   Gucci
   Zara
   H&M
   Levi's
   etc.

- **Category 4**: `Food and Beverage`

  - `Example`: Coca-Cola
   McDonald's
   Starbucks
   PepsiCo
   Nestlé
   Kellogg's
   etc.

- **Category 5**: `Retail and E-commerce`

  - `Example`: Amazon
   Walmart
   Alibaba
   eBay
   Target
   Best Buy etc.

- **Category 6**: `Entertainment and Media`

  - `Example`: Disney
   Netflix
   Warner Bros.
   Sony Pictures
   Spotify
   Time Warner
   etc.

- **Category 7**: `Cosmetics and Beauty`

  - `Example`: L'Oréal
   Estée Lauder
   Chanel
   Dior
   Urban Decay
   Procter & Gamble
   Revlon
   Avon
   Coty
   etc.

### :writing_hand: Main Requirements

1. Make sure your design and website idea is unique. First
 finalize your idea (what type of website you want to build). Then google the site design or visit `themeforest` to get your website idea. [You can visit this blog to collect free resources for your website](https://bootcamp.uxdesign.cc/free-images-and-resources-collection-for-website-c77f2fc46ce5). However
 your website :x: `can not be related to your previous assignments or any demo project displayed in the course or in our conceptual sessions` :x:.

2. Home page will have a navbar
 banner
 footer and at least 6 types of brand names having the following information: `brand image`and `brand name`.

3. The navbar will have website name with logo
 Home
 Add Product
 My Cart
 and Login.

4. Add two extra sections in the home page in addition to the 4 sections mentioned above.

5. Create an `Add Product` page where there will be a form for the user to add a product. The form will have:

   - Image
   - Name
   - Type (If you choose the `Technology and Electronics` category 
   then the types of products will be phone
    computer
    headphone
    etc)
   - Price
"   - "Short description
   - Rating
   - Add button

   This will be a private/protected route.

"6. On "clicking a brand will redirect the user to the page having products based on that brand. On that page
 there will be a slider having at least 3 advertisement images and at least 4 products. Each product will have:

   - Image
   - Name
   - Type (If you choose `Technology and Electronics` category 
   then the types of products will be phone
    computer
    headphone
    etc)
   - Price
"   - "Rating
   - Details button
   - Update button

   > **Note:** Among these six brand types
    one of them will not have any available products. You will have to show "a re"levant message on brand page to inform the users.

7. Clicking on the Details button will take the user to the product detail route. Each route should display detailed information of the product. What you will include in the detailed information is entirely upto you but make sure it is relevant. Make sure to implement the `Add to Cart` button.

8. The product detail route will be a private/protected route. Please make sure that if the user is not logged in
 the private route redirects to the login page.

9. Clicking the `Add to Cart` button will store your product information in to the database. Inform the user with a success message using a toast/alert. `Do not use the browser alert.`

10. Create a `My Cart` page where a user will see all his/her added products. If the user wants
 he/she can delete a product. The design is up to you. This will be a private/protected route.

11. Clicking on the `Update button` will redirect the user to a form page where the form will have:

    - Image
    - Name
    - Type (If you choose the `Technology and Electronics` category 
    then the types of products will be phone
     computer
     headphone
     etc)
    - Price
"    -" Rating
    - Submit button

    This will be a private/protected route.

12. You Must implement Email and password based Authentication. This means
 "you w"ill have to implement the Registration and the login page. Users should be able to toggle between Login and Registration view .

> :warning: `Note:` Do not enforce `forget or reset password feature` and the `email verification method`
 as it will inconvenience the examiner. If you want
 you can add email verification/forget the password after receiving the assignment result.

On the Registration page
 display errors when:

     The password

     - is less than 6 characters
     - don't have a capital letter
     - don't have a special character

On the Login page
 display errors when:

    - password doesn't match
    - email doesn't match
    You can take the error message from firebase. You can show the error below the input fields or via alert/toast. If you use alert/toast
     do not implement the browser alert.

13. Also
 implement at least `one extra login` which could be (facebook
 github
 google
 etc).

14. Once logged in
 the user name
 profile picture and the logout button should appear on the navbar. If the user clicks on the logout button
 make sure to log him/her out.

15. Add a 404 page (not found page)

### :gift: Bonus Requirements:

1. **Commits & readme:**

   - Minimum 10 meaningful git commits on the client-side repository.
   - Minimum 5 meaningful commits on the server-side repository.
   - Create a readme for client-side and write about your project (at least 5 bullet points). ** Remember to add your client-side live link to your website here.**

2. After reloading the page of a private route
 the user should not be redirected to the login page.

3. Make the website responsive. Make sure the site looks different on desktop and mobile responsive. Tablet responsive is optional

4. Implementing a dark/light theme toggle for the home page. It's optional to implement the theme toggle for the entire website.

### :scroll: Additional information:

1. You cannot load the data from a .json file. The data must be stored in the database and you must all the data from the database.
2. You can use a local or host image anywhere or use pictures from the internet. And it's ok if you have the image url
 but the image link doesn't work.
3. You can use vanilla CSS or any CSS library.
4. Try to host your site on Firebase (Netlify hosting will need some extra configurations)
5. Host your server-side application on Vercel. If needed
 you can host somewhere else as well.
6. Make Sure you deploy server-side and client-side on the first day. If you have any issues with hosting or GitHub push
 please join the "Github and deploy" related support session.

### :pushpin: What to submit

1. Your github client-side repository
2. Your github server-side repository
3. Your live website link

### :trophy: No Pain
 No Gain:

- The most beautiful moments in life comes after going through hardships and challenges.
images links
[https://i.postimg.cc/mk1MXPRw/New-Project-90.png
https://i.postimg.cc/3rzbKpy3/New-Project-91.png
https://i.postimg.cc/qgfK9pvd/New-Project-92.png
https://i.postimg.cc/yY9pWd9c/New-Project-93.png
https://i.postimg.cc/vZsqnsLj/New-Project-94.png
https://i.postimg.cc/Kc1HSQ89/New-Project-95.png
https://i.postimg.cc/P5Q6zRSq/New-Project-96.png
https://i.postimg.cc/MGZ9smLm/New-Project-97.png
]




  "brands": [
    
      name: "Pepsi"
      
      "products": [
        
          name: "Pepsi"
          
          image: "pepsi-cola.jpg"
          
          price: "1.99"
          
          type: "Soda"
          
          short_description: "Classic cola with a refreshing taste."
          
          rating: "4.5"
        
        
        
          name: "Pepsi"
          
          image: "pepsi-cola.jpg"
          
          price: "2.29"
          
          type: "Diet Soda"
          
          short_description: "Zero-sugar cola with maximum flavor."
          
          rating: "4.2"
        
        
        
          name: "Pepsi"
          
          image: "pepsi-cola.jpg"
          
          price: "2.49"
          
          type: "Flavored Soda"
          
          short_description: "Cola with a zesty lime twist."
          
          rating: "4.0"
        
        
        
          name: "Pepsi"
          
          image: "pepsi-cola.jpg"
          
          price: "2.49"
          
          type: "Cherry Soda"
          
          short_description: "Cola infused with the bold flavor of wild cherries."
          
          rating: "4.4"
        
      ]
    
    
    
      name: "Mars"
      
      "products": [
        
          name: "Mars"
          
          image: "Mars.jpg"
          
          price: "1.49"
          
          type: "Chocolate Bar"
          
          short_description: "A satisfying chocolate bar with caramel and peanuts."
          
          rating: "4.6"
        
        
        
          name: "Mars"
          
          image: "Mars.jpg"
          
          price: "1.99"
          
          type: "Candy"
          
          short_description: "Colorful candy-coated chocolate treats."
          
          rating: "4.3"
        
        
        
          name: "Mars"
          
          image: "Mars.jpg"
          
          price: "1.79"
          
          type: "Cookie Bar"
          
          short_description: "Crunchy cookie
           caramel
           "and chocola"te in one bar."
          
          rating: 4.2
        
        
        
          name: "Mars"
          
          image: "Mars.jpg"
          
          price: "1.69"
          
          type: "Caramel Bar"
          
          short_description: "Creamy caramel and nougat covered in milk chocolate."
          
          rating: "4.1"
        
      ]
    
    
    
      name: "Coca-Cola"
      
      "products": [
        
          name: "Coca-Cola"
          
          image: "coca-cola-classic.jpg"
          
          price: "1.79"
          
          type: "Soda"
          
          short_description: "The timeless
           refreshing taste of Coca-Cola"."
          "
          rating: 4.4
        
        
        
          name: "Coca-Cola"
          image: "coca-cola-classic.jpg"
          price: "1.99"
          type: "Diet Soda"
          short_description: "Crisp and calorie-free Diet Coke."
          
          rating: 4.3
        "
        "
        
          name: "Coca-Cola"
          image: "coca-cola-classic.jpg"
          price: "2.09"
          type: "Zero Sugar Soda"
          short_description: "Zero sugar version of the classic Coca-Cola."
          rating: 4.2
        
        
"        "
          name: "Coca-Cola"
          image: "coca-cola-classic.jpg"
          price: "1.69"
          type: "Lemon-Lime Soda"
          short_description: "Bubbly and refreshing lemon-lime soda."
          rating: 4.5
        
      ]
"    "
    
    
      name: "KFC"
      
      "products": [
        
          name: "KFC"
          image: "original-recipe-chicken.jpg"
          price: "5.99"
          type: "Chicken"
          short_description: "Crispy and flavorful KFC chicken."
          rating: 4.7
        
        
"        "
          name: "KFC"
          image: "original-recipe-chicken.jpg"
          price: ""2.4"9"
          type: "Side Dish"
          short_description: "Creamy mashed potatoes with gravy."
          rating: "4.0"
        
        
"        "
          name: "KFC"
          image: "original-recipe-chicken.jpg"
          price: "4.99"
          type: "Chicken"
          short_description: "Tender and juicy chicken tenders."
          rating: 4.4
        
        
"        "
          name: "KFC"
          image: "original-recipe-chicken.jpg"
          price: "1.99"
          type: "Side Dish"
          short_description: "Crunchy and tangy coleslaw."
          rating: "3.8"
        
      ]
"    "
    
    
      name: "Nestle"
      
      "products": [
        
          name: "Nestle"
          image: "nestle-chocolate.jpg"
          price: "1.99"
          type: "Chocolate Bar"
          short_description: "Smooth and rich Nestle bar."
          rating: 4.6
        
        
"        "
          name: "Nestle"
          image: "nestle-chocolate.jpg"
          price: "4.99"
          type: "Coffee"
          short_description: "Nestle's premium coffee blend."
          rating: 4.2
        
        
"        "
          name: "Nestle"
          image: "nestle-chocolate.jpg"
          price: "3.49"
          type: "Ice Cream"
          short_description: "Creamy and indulgent ice cream."
          rating: 4.4
        
        
"        "
          name: "Nestle"
          image: "nestle-chocolate.jpg"
          price: "1.79"
          type: "Candy"
          short_description: "Crispy chocolate candy with a crunch."
          rating: 4.5
        
      ]
"    "
  ]
mars
https://i.postimg.cc/8kr84TrC/1.png
https://i.postimg.cc/fyd6Rvhd/2.png
https://i.postimg.cc/3RVshcz7/3.png
https://i.postimg.cc/xCcwW2xt/4.png

pep
https://i.postimg.cc/bwzDjCQK/1.png
https://i.postimg.cc/PrnvSrNf/2.png
https://i.postimg.cc/9FPRK5qd/3.png
https://i.postimg.cc/zDgRwRzP/4.png

nes
https://i.postimg.cc/bY9qYt95/1.png
https://i.postimg.cc/rwKT9Y26/2.png
https://i.postimg.cc/zXD8yGdG/3.png
https://i.postimg.cc/q76kpD1c/4.png

kfc
https://i.postimg.cc/90gmm3Hp/1.png
https://i.postimg.cc/h42PbmQd/3.png
https://i.postimg.cc/Kj8chGwj/4.png
https://i.postimg.cc/4d54078j/5.png

coc
https://i.postimg.cc/90BhM63S/1.png
https://i.postimg.cc/wx5H0mtV/3.png
https://i.postimg.cc/brPPqz5k/4.png
https://i.postimg.cc/Lsq2TQfY/5.png
