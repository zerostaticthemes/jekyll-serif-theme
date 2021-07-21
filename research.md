---
title: 'Research'
date: 2018-02-22T17:01:34+07:00
layout: page
bodyClass: page-about
---




# 研究内容
--------
<div class="" id="rou"></div>
## 机器人柔软体操作
<!--table 2-->
<!--<h3 id="soft-manipulation">机器人柔性体操作</h3>-->
<p>本研究方向研究利用机器人操作柔软变形物体的方法。在生产、生活中有很多机器人应用涉及自动处理柔软、易变形物体。比如在装配线上存在电缆安装、布线的作业，很多橡胶、塑料制零件也广泛应用于产品的装配中。生活中，一台合格的服务机器人不仅要能够处理衣物、被褥等纺织品，还要能够做饭、切菜。手术机器人应用中，需要机器人对软组织进行剥离、缝合等手术处理。本研究方向以这些应用为背景，研究其中的物体<strong>形变控制、操作规划、状态感知技术</strong>。</p>
<html>
 <!--row 1-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
             <!--此处插入视频链接或图片链接-->
             <!-- <img src="../images/research_imgs/auto_driving11.gif" alt="hpp" style="border-style: none; margin: 20px 0px -5px 0px" width="100%" />-->
             <!--   <img src="../images/research_imgs/auto_driving12.gif" alt="hpp" style="border-style: none" width="100%" />-->             
             <div style="position: relative; padding: 30% 45%;">
               <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"  src="//player.bilibili.com/player.html?aid=376526176&bvid=BV1Ao4y1X7mt&cid=365353139&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"  > </iframe>
             </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>无标记面状柔性体的变形跟踪与形状控制</strong>
                </papertitle> 
              <br />
              对于表面缺乏视觉特征的面状柔性体，如单色的纸张。使用实时NURBS曲面拟合跟踪描述物体变形状态的点云。由NURBS曲面坐标可以获得物体上点的实时3D位置，进而实现对物体上点的位置伺服。如视频所示，对于单色纸表面任意指定点，通过这个方法可以将其定点于指定3D位置（盒子的边缘线）。        
            </td>
          </tr>
    </table>
  <!--row 2-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
              <!--此处插入视频链接或图片链接-->
              <div style="position: relative; padding: 30% 45%;">
                <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=504103592&bvid=BV1ag411T7J7&cid=365309084&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>  
              </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>基于视/触觉的柔性体变形控制</strong>
                </papertitle> 
              <br />
              传统柔软体的变形控制多基于位置约束假定，也即是说被操作对象被机械手紧紧夹住，物体与夹持器之间接触状态不变。但在一些场合，这一假定无法满足。因此需要考虑基于视/触觉反馈的柔性体变形控制方法。如视频所示，一方面控制机械手与物体间的接触状态保持稳定，另一方面控制物体形变收敛于指定状态。             
            </td>
          </tr>
    </table>
  <!--row 3-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
              <!--此处插入视频链接或图片链接-->
            <div style="position: relative; padding: 30% 45%;">
              <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=461547644&bvid=BV1pL411W7f8&cid=365350084&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
            </div>
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>受限环境中基于视觉的电缆装配</strong>
                </papertitle> 
              <br />
              电缆接头的插拔除了需要将插头定位于插座中以外，还要考虑在这一过程中电缆与周围环境之间可能产生的干涉。当干涉发生时，需要机器人通过主动改变电缆形状实现避障。本研究使用基于视觉的变形伺服技术实现这个目的。并且通过在人工势场法的框架下将末端位置控制与基于视觉的电缆变形伺服这两个相互干涉的任务集成在一起，保证了插头插接和电缆避障两个任务能同时实现。             
            </td>
          </tr>
    </table> 
 <!--row 4-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
              <!--此处插入视频链接或图片链接-->
            <div style="position: relative; padding: 30% 45%;">
              <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=931694581&bvid=BV1aM4y1K7Sv&cid=372109274&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
            </div>
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>基于视觉的柔软体形状伺服控制</strong>
                </papertitle> 
              <br />
              增加电缆了的避障规划，可以根据环境约束状况规划实现避障的电缆形状。为了使后续的变形伺服收敛，规划出的电缆形状必须物理上合理。             
            </td>
          </tr>
    </table> 
  <!--row 5-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
              <!--此处插入视频链接或图片链接-->
            <div style="position: relative; padding: 30% 45%;">
              <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=546637587&bvid=BV13q4y1W7ip&cid=370846986&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
            </div>
              <div style="position: relative; padding: 30% 45%;">
              <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=419156649&bvid=BV1NV411s7tj&cid=370951068&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
            </div>
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>基于深度学习的线状柔性体拓扑状态识别及线缆拆解</strong>
                </papertitle> 
              <br />
              自动操作绳缆一类线状柔软体的难点在于如何识别及控制线缆缠绕的拓扑状态。本研究利用深度学习方法，利用2D图象自动识别线缆的拓扑状态，并由此构建的模型生成拓扑操作步骤。深度学习的使用可以容易地实现算法对复杂未知背景的鲁棒性。左图所示为对随机缠绕状态下线缆的自动拆解实验。             
            </td>
          </tr>
    </table> 
</html>
--------------
<!--table 2-->
<div class="" id="jian"></div>
## 建筑机器人
<!--<h3 id="soft-manipulation">建筑机器人</h3>-->
<p>目前在建筑装修行业正面临着人力成本高昂，人员日益匮乏的局面。在我国，建筑行业员工流动性强，农民工居多的特点导致施工质量控制困难。针对这些问题，本研究方向研究实现机器人自主建筑施工所需相关技术。主要研究内容包括<strong>自主移动施工平台的设计、建筑场景下移动机器人的导航定位，基于传感器反馈的自主装修施工作业、建筑环境的感知技术</strong>。</p>
<!--row1-->
<html>
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
             <!--此处插入视频链接或图片链接-->
             <div style="position: relative; padding: 30% 45%;">
                <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?   aid=504071890&bvid=BV1Ag411g7K7&cid=365351415&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
             </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>基于UR机械臂的自动墙壁打磨</strong>
                </papertitle> 
              <br />
              墙面的自动打磨需要实现对打磨效果的自动评估及打磨动作的自动规划。本研究使用视觉传感器，结合深度学习的方法实现了对打磨效果的自动评估（合格与否）。机器人根据评估效果决定施工区域的各个部分是否进行打磨。         
            </td>
          </tr>
    </table>
 <!--row2-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
              <!--此处插入视频链接或图片链接-->
              <div style="position: relative; padding: 30% 45%;">
                <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=504073715&bvid=BV1wg411g7xK&cid=365347557&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
              </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>基于视觉的自动抹腻子应用</strong>
                </papertitle> 
              <br />
              自动抹腻子施工同样需要机器人自动评估涂抹效果。不同于打磨作业，腻子的状态更加复杂。本研究中，以腻子的划痕为主要特征，利用深度学习识别划痕的主要类别，并根据识别出的类别令机器人实施不同的动作。实现了初步的自动腻子抹平。              
            </td>
          </tr>
    </table>
 <!--row3-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
              <!--此处插入视频链接或图片链接-->
            <div style="position: relative; padding: 30% 45%;">
              <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=888969315&bvid=BV1nK4y1M7SM&cid=364457792&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
           </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>抹腻子用宏-微机械臂</strong>
                </papertitle> 
              <br />
              墙面施工的许多操作中，需要执行器能自动适应墙面的未知起伏。为实现这一目的，本研究在机械臂末端安装三自由度并联平台，构成宏微机械臂。通过机械臂末端安装的激光测距仪，并联平台可以实施感知墙面的起伏变化，并通过并联平台的伺服，保持执行器末端始终与墙面保持固定的相对位姿。目前宏微机械臂被用于新一代抹腻子施工中。             
            </td>
          </tr>
    </table>    
 <!--row4-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
              <!--此处插入视频链接或图片链接-->
            <div style="position: relative; padding: 30% 45%;">
              <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=546708652&bvid=BV1aq4y1W7xf&cid=370963607&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
           </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>建筑环境点云数据的自动获取</strong>
                </papertitle> 
              <br />
              研究以安装有激光全站仪的移动机器人为平台，自动获取建筑施工环境三维数据的方法。激光全站仪虽可获得大范围、高精度的点云数据，但不具有实时性。因此需要解决动、静环境下的扫描规划、点云拼接等问题。            
            </td>
          </tr>
    </table>  
 <!--row5-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
              <!--此处插入视频链接或图片链接-->
            <img src="../images/research/pointCloudProcess.jpg" alt="hpp" style="border-style: none; margin: 20px 0px -5px 0px" width="100%" />
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>建筑施工点云数据处理</strong>
                </papertitle> 
              <br />
              在建筑工程施工验收以及施工过程进度监控等应用中，需要对大量点云数据进行处理。本项目研究其中所涉及的点云处理技术，并用于房屋自动尺寸测绘、自动质量检测报告生成等应用中。           
            </td>
          </tr>
    </table>   
 <!--row6-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
              <!--此处插入视频链接或图片链接-->
            <div style="position: relative; padding: 30% 45%;">
              <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=931671988&bvid=BV1WM4y1K7d6&cid=372151981&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
           </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>建筑场景中移动机器人的导航定位</strong>
                </papertitle> 
              <br />
              在建筑现场工作的自主移动机器人需要确定相对于设计图纸的精确位置。建筑现场往往视觉特征稀疏且容易发生变化。本项目目前研究基于视觉/激光雷达的定位、施工缺陷在地图中的标注等问题。          
            </td>
          </tr>
    </table>    
</html>

--------------
<!--table 3-->
<div class="" id="zhua"></div>
## 机器人抓取

<p>本研究方向主要面向<strong>物流</strong>及<strong>工业装配</strong>领域的应用需求，研究<strong>堆叠状态下物品的抓取方法</strong>及<strong>基于简单机构的零件在手操作方法（In-Hand Manipulation）</strong>。</p>
<!--row1-->
<html>
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none" align="center">
             <!--此处插入视频链接或图片链接-->
             <div style="position: relative; padding: 30% 45%;">
                <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=631598830&bvid=BV1Pb4y1k7Rt&cid=368446589&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
             </div> 
               
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>基于点云的毛巾分拣</strong>
                </papertitle> 
              <br />
              使用平行指夹具进行毛巾一类织物的分拣，主要的问题在于抓取的规划。也即是回答抓什么地方，平行指以何种姿态进行夹取。本研究使用RGB-D相机获得物体的3D点云，提取织物中的褶皱作为特征。评估视野中最合适的抓取点及平行指夹取姿态。         
            </td>
          </tr>
    </table>
 <!--row2-->
    <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
              <!--此处插入视频链接或图片链接-->
              <div style="position: relative; padding: 30% 45%;">
                <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?aid=804299807&bvid=BV1Ky4y1j7gs&cid=372369067&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
              </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>软硬物体混合情况下的物体抓取</strong>
                </papertitle> 
              <br />
              在生活中存在软、硬物体堆叠在一起的场景（例如物体被毛巾、衣物等覆盖）。机器人在规划抓取位置的时候如果不能识别出这种状态，有可能使夹爪碰撞到坚硬的物体上。本研究提出了在这类场合下的抓取规划方法。             
            </td>
          </tr>
    </table>
 <!--row3-->
   <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
              <!--此处插入视频链接或图片链接-->
              <div style="position: relative; padding: 30% 45%;">
                <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"  src="//player.bilibili.com/player.html?aid=589206080&bvid=BV1wB4y1K7AN&cid=372158460&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
              </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>物流线上包裹的分拣</strong>
                </papertitle> 
              <br />
              物流线上除了定型包裹（如信封、快递盒子以外），还存在非定型包裹（如用袋子包裹的物品）。本项目研究堆叠情况下这些包裹的分拣方法。              
            </td>
          </tr>
    </table>
  <!--row4-->
   <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
          <tr onmouseout="nightsight_stop()" onmouseover="nightsight_start()">
            <td style="padding:0px;width:30%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
              <!--此处插入视频链接或图片链接-->
              <div style="position: relative; padding: 30% 45%;">
                <iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"  src="//player.bilibili.com/player.html?aid=759098640&bvid=BV1g64y1X7ee&cid=368448327&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
              </div> 
            </td>
            <td style="padding:10px;width:70%;vertical-align:middle;border-left-style:none;border-bottom-style:none;border-top-style:none;border-right-style:none">
                <papertitle><strong>工业零件的在手操作</strong>
                </papertitle> 
              <br />
              在工业装配应用中，一个完整的流程既包括零件的拾取（从零件盒），也包括零件安装。由于零件在零件盒的初始状态随机，因此一般情况下需要在进入装配环节前通过送料机或专用的机械臂实现零件的位姿一致。本研究通过在平行指夹具内增设操作零件的自由度，实现零件在手中位姿的自动调整。利用这个夹具，仅用一台机械臂即可实现从零件的拾取到安装的全流程。             
            </td>
          </tr>
    </table>
</html>

