const myLife = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/dcfa/5e35/d473cb5013088079f18d283b9d3e095c?Expires=1702252800&Signature=MtDrDZVG0u0y8rSmazbh~h68wASoa8FbtZSfDMi9r6YjCe1wYIGHtz46m2miWqlGmoGyP5MGx20HwNYOfKJmKMIglJMFjCpeuZbiMoOzyiPTQrOq7P-UkZWydVrFMrKEnTCszBNBrAk2Ax9hZFZxwshQSPmV2PEhZcqD4cGf7cjkyGwKfsp-X~LDseKouPYSEhcLaPfVquzCPZEThnBKe8NeCfkUY8bDEr-qzQJsY~5N9nF0pAO9erLtSFzvPfHqhk09rNhvy~WgQpa805xURhF8XFbEGV8VAyjy15tQVQwxEfBLHoW8dQds15xp5pQN7~o1XciIyLOoKa7i0w8v-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "My Pets",
    button: "Read more",
    time: "18.03.21",
    description:
      "P1:Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
    author: "Jane Doe",
    id: 1,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/c030/7127/35cbe7f70cab1d037a771a9f7dbccc56?Expires=1702252800&Signature=iwQWmpA9UYcJwsBxLG-Aum~RrO0QkPcQ1xb5s1qEKtxBvH2jlQj~qcdADxODX3a8U9yPOonNQ1UApXZoehATNYI5TDveAfqNBtkNQqDJ2jdFH9pw~l8FHEh6qNCF0E2Yc-vrDwc~rUgzL3XG-LP5OeY5HFuvYZiB5hhyR3pP2EG2leZ4gFh8t34VrT2toPar3EewidWxRQcrzvmdAv8ndOR2jOWMIYIcPI7jQR8E3EG727-wSsoYVH71UmbLAoNbkFL50u8Vytz0O3bt90--yNNEFgzxH4QuYVMFfRemutgaEP5ZOiCeziWnmJV9ZbrgkX6CAfkMuRsAbYLLIZveBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "My Plants",
    button: "Readmore",
    time: "05.06.21",
    description:
      "P2:Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
    author: "Jane Doe",
    id: 2,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/9c0b/4077/55eef23caf2369cb68fd84867982146f?Expires=1702252800&Signature=IaRHZynpU~HuwuVqfrDOMY~mepkq3j7RT5GrY-cq4V8lOksI0j-mrZfKvWc-eXZCxAQpZhzmDZj5JPnT0msTslnvtjGfiyAVGODYsh6tdSgZ2xEW-KcAg4T3qmw9ypoWdZJPmSaMSzugwKk-MEX3Nuswr3kVyfGzWoTSPIDKp1CaXjPCdDCavP3WpNLsw7zJc5mhyYJ2Gd7XcziEocQJ5c8OuBo-T~1u0~4RHl4D3b2yTg3tZ1Puygm~J7DTZz3Zi7keeL49lw2OeaT3Ubjjbbnk6D5xRAdpwTRJBJ6znIKfvl4JPkSiEJMzm4W~~~bn3aRz6LYvw1YV75O7ikyCiA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "My Work",
    button: "Readmore",
    time: "18.03.20",
    description:
      "P3:Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
    author: "Jane Doe",
    id: 3,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/0cb6/ed96/14c03d4751e45070cbf13e3e21985bdc?Expires=1702252800&Signature=KGBLypXcGGv8D2PI4infAPzWfV-yjNcavAtoLXMRhbhspDnPKI99qBU7dC1l8zaPkYi3lko~kNvsbgfBWMt6j87J2EAovtNgVAVEx4Y6Hnp~FrinbhYKHSrZNu6nWsnJcCw4BKBF1YfImxykBE~hDuRcPulipf~xrsvSqRB0BGqFbSyzWWZ6ZDYTAmwG0eGCZQDgSzog~jB4XvCL5OBEAGrrPvR14W0Glx79vRLgeYel9aQfWq3SE80Y2nfiEoMMiP3UybJF~MMGcBAkIPME9ozOMrdtBooO6OIzcWwV01dge0Li8ipIX9-mU6ogHaNReoIGoRZOw4SM-xAIwHa9yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "My Hobbies",
    button: "Readmore",
    time: "28.03.21",
    description:
      "P4:Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
    author: "Jane Doe",
    id: 4,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f7e0/b8e9/18253c9486b08bf4b168c0643d60fd89?Expires=1702252800&Signature=nzqa3vuZGYUEgNaDJdCZp7LkD5LiGWfbYDXEYE-wfJi~BD4fUlyrilVD12TcKgY9tMhK7GOfno2Y-GwOB3xJdNUWZDRai~NdAs4AJaMbL8eZRGZD35Ti3upw01JSqXxSDRKwFiAvOAHaTGBlytJ-tCNFHW0Ub2v1eE38O5VPc9hDgyrBHwNuNSh1h9VLIa9T8kOsBhQAOBcod4kSybcM58~aRAkw8gvd34yi60ugA6KzXla3fXiidqKV535dzEd32b7R12vgbgcnWG~z0WtmHj5WhDr8aGNXPsNOGBvOiZVD1W2uHyyE4vVCx3hzcdnTFc3EfOnPhBF-hS26Qr~smQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Social Media",
    button: "Readmore",
    time: "18.06.21",
    description:
      "P5:Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
    author: "Jane Doe",
    id: 5,
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/69d5/c22d/c537fe869482eb3c61d7cad47c6cf3c8?Expires=1702252800&Signature=Rthph~yq71S44ytXQj3jz3kbPtAnlZKcBnsRi8OWRTsViDBYsrxkmFuF~0WHhuQh~rqwP35tlhJ8xBGRTPpQhM89GEmVASohxWZkkvPqUcM4o6~~jhDKF976X1t1e~DpxWENv2szTuMQE6kGsEC-xxPZvAoGofy7ahwlaZ2sfZYUyAQTt1m5PLULvLwS5yPJMwLY49wLEpbs~VgUqUu3pCKbVsKCd6fhY2IuFA0LuTJQBnqVkbqxFRRnF0CZiCgr8WgcEzeTe9ahyzlaFjzLONqiQJPy0RHOamI7geCjrlRtlsxAmZ5nR~d9TdXdE8BhBYevyoVyRxeoRBgJMPL3iA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Coding Life",
    button: "Readmore",
    time: "18.09.22",
    description:
      "P6:Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!",
    author: "Jane Doe",
    id: 6,
  },
];

export default myLife;
