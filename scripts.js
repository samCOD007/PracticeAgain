// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Example: Load blog posts dynamically
    const posts = [
        {
            title: "The Dark Side of the Internet: A Cautionary Tale",
            content: "The internet, a vast and complex web of information and communication, has undeniably transformed our world. However, beneath its glossy surface lie a host of troubling issues that often go unnoticed. In this blog, we’ll delve into some of the less-discussed negative consequences of the internet, offering a critical perspective on how it affects our lives.

1. Erosion of Privacy

One of the most significant downsides of the internet is the erosion of personal privacy. With the vast amount of data we share online, from social media updates to online purchases, our personal information is increasingly at risk. Data breaches, surveillance, and the misuse of information by corporations and governments have become common, leaving individuals vulnerable to identity theft and exploitation.

2. Spread of Misinformation

The internet has become a breeding ground for misinformation and fake news. The ease with which information can be shared means that false or misleading content can spread rapidly, often with serious consequences. This misinformation can influence public opinion, affect elections, and even incite violence, highlighting a major flaw in the system of online communication.

3. Cyberbullying and Harassment

Online platforms have also given rise to cyberbullying and harassment. The anonymity afforded by the internet can embolden individuals to engage in harmful behavior that they might avoid in person. Victims of cyberbullying can suffer from significant emotional and psychological distress, making this a serious issue that demands attention and action.

4. Addiction and Mental Health Issues

Internet addiction is another growing concern. With the proliferation of social media, gaming, and other online activities, many people find themselves spending excessive amounts of time online, often at the expense of their real-life relationships and responsibilities. This can lead to a range of mental health issues, including anxiety, depression, and a diminished sense of well-being.

5. Digital Divide and Inequality

The internet has highlighted and often exacerbated existing social inequalities. Access to digital resources and high-speed internet is not universal, leading to a digital divide where certain populations are left behind. This disparity affects education, job opportunities, and access to critical information, perpetuating cycles of inequality.

6. Economic Exploitation

Lastly, the internet has facilitated new forms of economic exploitation. From exploitative gig economy jobs to the pressure on traditional businesses to adapt to an online marketplace, many individuals face precarious working conditions. The shift to a digital economy has often favored large corporations, leaving smaller businesses and workers at a disadvantage.

In conclusion, while the internet has revolutionized many aspects of modern life, it's crucial to remain aware of its darker consequences. By understanding these issues, we can work towards creating a safer and more equitable digital world."
        },
        {
            title: "Wait For the second post",
            content: "*WAIT*"
        }
    ];

    const postContainer = document.querySelector('#home .container');

    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'post';
        article.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        postContainer.appendChild(article);
    });
});
