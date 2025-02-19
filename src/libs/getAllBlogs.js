import blogImage1 from "@/assets/img/blog/blog__1.png";
import blogImage2 from "@/assets/img/blog/blog__2.png";
import blogImage3 from "@/assets/img/blog/blog__3.png";
import blogImage4 from "@/assets/img/blog/blog__4.png";
import blogImage5 from "@/assets/img/blog/blog__5.png";
import blogImage6 from "@/assets/img/blog/blog__6.png";
import blogImage7 from "@/assets/img/blog/blog__7.png";
import blogImage8 from "@/assets/img/blog/blog__8.png";
import blogImage9 from "@/assets/img/blog/blog__9.png";
const getAllBlogs = () => {
  const blogs = [
    {
      id: 1,
      title:
        "5 Strategies to Transform Your Business with Effective Consulting",
      img: blogImage1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Management",
      category: "Supply Chain Optimization",
      day: 12,
      publishDate: "10 Dec, 2024",
      date: "July, 2024",
      duration: "1500",
      url: "strategies-to-transform",
      content: `<h2>Introduction</h2>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

<h3>The Origins</h3>
<p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

<h3>The Source</h3>
<p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of <strong>"de Finibus Bonorum et Malorum"</strong> (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>

<blockquote>The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</blockquote>`,
    },
    {
      id: 2,
      title: "Why Every Startup Needs a Business Consultant",
      img: blogImage2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Start-up",
      category: "Supply Chain Optimization",
      day: 15,
      publishDate: "11 Dec, 2024",
      date: "August, 2024",
      duration: "1800",
      url: "why-to-transform",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      id: 3,
      title: "How Marketing Consultants Can Double Your Revenue in 6 Months",
      img: blogImage3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Start-up",
      category: "Supply Chain Optimization",
      day: 16,
      publishDate: "12 Dec, 2024",
      date: "Sep, 2024",
      duration: "2100",
      url: "how-marketing-to-transform",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      id: 4,
      title:
        "5 Strategies to Transform Your Business with Effective Consulting",
      img: blogImage4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Management",
      category: "Strategic Planning",
      day: 19,
      publishDate: "14 Dec, 2024",
      date: "Sep, 2024",
      duration: "2100",
      url: "business-to-transform",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      id: 5,
      title: "Why Every Startup Needs a Business Consultant",
      img: blogImage5,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Consulting",
      category: "Market Entry Strategy",
      day: 12,
      publishDate: "16 Dec, 2024",
      date: "Sep, 2024",
      duration: "2100",
      url: "every-starup-to-transform",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      id: 6,
      title: "How Marketing Consultants Can Double Your Revenue in 6 Months",
      img: blogImage6,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Start-up",
      category: "Supply Chain Optimization",
      day: 21,
      publishDate: "16 Dec, 2024",
      date: "Sep, 2024",
      duration: "2100",
      url: "marketing-can-to-transform",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      id: 7,
      title:
        "The Ultimate Guide to Choosing the Right Marketing Consultant for Your Brand",
      img: blogImage7,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Management",
      category: "Strategic Planning",
      day: 19,
      publishDate: "17 Dec, 2024",
      date: "Sep, 2024",
      duration: "2100",
      url: "guide-to-right-to-transform",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
    {
      id: 8,
      title:
        "Corporate Strategy: How to Align Business Goals with Organizational Success",
      img: blogImage8,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      tag: "Start-up",
      category: "Supply Chain Optimization",
      day: 12,
      publishDate: "18 Dec, 2024",
      date: "Sep, 2024",
      duration: "2100",
      url: "how-align-to-transform",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
  ];
  return blogs;
};

export default getAllBlogs;
