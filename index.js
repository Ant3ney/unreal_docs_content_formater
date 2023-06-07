const contentEle = document.querySelector("div");
const lessons = [
  {
    lesssionID: "1.2.1.0",
    title: "Templates Reference",
    subtitle: "Templates available with Unreal Engine and how to use them",
    link: "https://docs.unrealengine.com/5.0/en-US/unreal-engine-templates-reference",
  },
  {
    lesssionID: "1.2.1.2",
    title: "Engine Feature Examples",
    subtitle:
      "Full scenes demonstrating particular features or approaches to specific challenges.",
    link: "https://docs.unrealengine.com/5.0/en-US/engine-feature-examples-for-unreal-engine",
  },
  {
    lesssionID: "1.2.1.3",
    title: "Content Examples",
    subtitle:
      "This sample project demonstrates specific concepts and techniques to use in Unreal Engine.",
    link: "https://docs.unrealengine.com/5.0/en-US/content-examples-sample-project-for-unreal-engine",
  },
  {
    lesssionID: "1.2.1.4",
    title: "Sample Game Projects",
    subtitle:
      "Full sample games demonstrating the implementation of various genres.",
    link: "https://docs.unrealengine.com/5.0/en-US/sample-game-projects-for-unreal-engine",
  },
  {
    lesssionID: "1.2.1.5",
    title: "Free Epic Games Content",
    subtitle:
      "Companion documentation for free content distributed by Epic in the Marketplace.",
    link: "https://docs.unrealengine.com/5.0/en-US/free-epic-games-content-for-unreal-engine",
  },
];

lessons.forEach((lesson, i) => {
  const newContentContainerEle = document.createElement("div");
  const newP1Ele = document.createElement("span");
  const newP2Ele = document.createElement("span");
  const newLinkEle = document.createElement("a");
  const newSpanEle = document.createElement("span");

  newLinkEle.setAttribute("href", lesson.link);
  newLinkEle.setAttribute("target", "_blank");
  newLinkEle.textContent = lesson.title;

  newSpanEle.innerHTML = lesson.lesssionID + "&nbsp";

  newP1Ele.appendChild(newSpanEle);
  newP1Ele.appendChild(newLinkEle);

  newP2Ele.textContent = lesson.subtitle;
  newP1Ele.appendChild(newLinkEle);

  newContentContainerEle.appendChild(newP1Ele);
  newContentContainerEle.appendChild(document.createElement("br"));
  newContentContainerEle.appendChild(newP2Ele);
  newContentContainerEle.appendChild(document.createElement("br"));

  contentEle.appendChild(newContentContainerEle);
});
