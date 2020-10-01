var arr=[];
var size;
var gap;
var bar_width;
var curr_sort=0;

function setup_init(s)
{
    size=s;
    gap=5;
    bar_width=width/size-6;
    for(let i=0;i<size;i++)
        arr.push(random(20,height-30));
}

function setup() 
{
    createCanvas(windowWidth,windowHeight);
    
    if(width<500)
      setup_init(30);
    else
      setup_init(50);
    
    
    b1=createButton("RESET");
    b1.position(150,35);
    b1.mouseClicked(reset);
    
    s1=createSlider(1,60,25,1);
    s1.position(70,6);
    
    sel=createSelect();
    sel.position(10,35);
    sel.option("SELECTION SORT");
    sel.option("BUBBLE SORT");
    sel.option("QUICK SORT");
    sel.option("HEAP SORT");
    sel.option("MERGE SORT");
    sel.changed(changeSort);
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
  if(width<500)
      setup_init(30);
  else
      setup_init(50);
  reset();
}

function reset()
{
    ss=0;
    bs=0;
    qs=0;
    hs=0;
    ms=0;
    arr=[];
    sorted_by_qs=[];
    for(let i=0;i<size;i++)
        arr.push(random(20,height-30));
}

function changeSort()
{
    if(sel.value()=="SELECTION SORT")
        curr_sort=0;
    else if(sel.value()=="BUBBLE SORT")
        curr_sort=1;
    else if(sel.value()=="QUICK SORT")
        curr_sort=2;
    else if(sel.value()=="HEAP SORT")
        curr_sort=3;
    else if(sel.value()=="MERGE SORT")
        curr_sort=4;
    reset();
}


function draw() 
{
    background(color('#120136'));
    fill(255,100,100);
    stroke(255,100,100);
    text("SPEED",15,20);
    frameRate(s1.value());
    switch(curr_sort)
        {
            case(0):
            {
                ss_show();
                if(ss==0)
                {
                    ss=1;
                    ss_init();
                }
                ss_step();
                break;
            }
            case(1):
            {
                bs_show();
                if(bs==0)
                    {
                        bs=1;
                        bs_init();
                    }
                bs_step();
                break;
            }
            case(2):
                {
                    if(qs==0)
                        {
                            qs=1;
                            qs_init();
                        }
                    qs_show();
                    qs_step();
                    break;
                }
            case(3):
                {
                    if(hs==0)
                        {
                            hs=1;
                            hs_init();
                        }
                    hs_show();
                    hs_step();
                    break;
                }
            case(4):
                {
                    if(ms==0)
                        {
                            ms=1;
                            ms_init();
                        }
                    ms_show();
                    ms_step();
                    break;
                }
                
        }
}