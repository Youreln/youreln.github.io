var posts=["2024/10/06/摄影墙/","2023/08/07/Youreln工具箱二创开发必知/","2024/08/31/饼图代码设计/","2024/08/31/photography/","2024/08/26/工具箱安卓APP效果实现方法/","2024/07/17/换源公告/","2024/07/14/音乐之翼/","2024/07/12/黄山旅游攻略/","2024/07/05/音乐剧设计安排/","2024/06/29/大型纪录片《卡脚》脚本/","2024/04/04/爬楼看云/","2024/01/24/红包封面/","2024/01/01/新年快乐/","2023/11/26/京台 1990/","2023/11/25/中梧教育回归/","2023/10/07/采访榄哥/","2023/07/28/Youreln工具箱2.0版本更新/","2023/07/14/护青园法治夏令营/","2023/07/11/大田不夜城创作影集/","2023/07/07/辩论赛陈词/","2023/07/01/Youreln工具箱正式发布/","2023/06/26/用户指南/","2023/06/25/昆虫记小册子/","2023/06/22/红星照耀中国小册子/","2023/06/11/youreln工具箱/","2023/06/11/xiaopf教育app2.0版本上线了/","2023/06/01/六一/","2023/05/13/xiaopf教育网页版发布！！！/","2023/05/06/湖美七星湖/","2023/05/05/xiaopf教育app停服公告/","2023/05/05/班级同学外号查询/","2023/05/05/搞个项目迭了8代/","2023/05/01/xiaopf教育app正式上线！/","2023/04/22/关于我/","2023/04/05/Youreln/","2023/01/21/查询困扰福建中小学生福建尚行知“拨雪寻春书香满园”寒假云诗词大会/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };