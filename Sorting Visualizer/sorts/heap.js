var downing,mainheapify,hsmax,whathsdo;
var hs=0;

function hs_init()
{
    downing=0;
    mainheapify=size;
    hsmax=size;
    whathsdo=0;
}

function hs_step()   //what happens at each step
{
    if(whathsdo==0)   //heapify
        {
            if(downing==0)
                {
                 downing=1;
                 mainheapify--;
                 heapify=mainheapify;
                 hs_down_step(heapify,size);
                }
            else
                {
                    hs_down_step(heapify,size);
                }
        }
    else if(whathsdo==1)   //after heapify, remove root, replace with last, flow-down for root
        {
            if(downing==0) // checking if in between flow-down
                {
                    downing=1;
                    hsmax--;
                    let temp=arr[hsmax];
                    arr[hsmax]=arr[0];
                    arr[0]=temp;
                    heapify=0;
                }
            else
                {
                    hs_down_step(heapify,hsmax);
                }
        }
}

function hs_down_step(h,newsize)  // used in heapify and deletion of root of max-heap aka.flow-down
{
    let lc=h*2+1;
    let rc=lc+1;
    let si=-1;
    if(rc<newsize)
        {
           if(arr[rc]>arr[lc])
               si=rc;
            else
                si=lc;
        }
    else if(lc<newsize)
        {
            si=lc;
        }
    else
        {
            downing=0;
            if(whathsdo==0)
                {
                    if(mainheapify==0)
                        whathsdo=1;
                }
                else if(whathsdo==1)
                    {
                        if(hsmax==0)
                            whathsdo=2;
                    }
        }
    if(si!=-1)
        {
            if(arr[si]>arr[h])
                {
                    let temp=arr[si];
                    arr[si]=arr[h];
                    arr[h]=temp;
                    heapify=si;
                }
            else
                {
                    downing=0;
                    if(whathsdo==0)
                        if(mainheapify==0)
                            whathsdo=1;
                    else if(whathsdo==1)
                        if(hsmax==0)
                            whathsdo=2;
                }
        }
}

function hs_show()
{
    stroke(255,0,0);
    strokeWeight(1);
    fill(100,50,255);
    for(let i=0;i<size;i++)
        {
            if(whathsdo==0)
                {
                    fill(color('#035aa6'));
                    stroke(color('#035aa6'));
                }
            else
                {
                    if(i<hsmax)
                       {
                           if(downing==0)
                               {
                                   fill(color('#d92027'));
                                    stroke(color('#d92027'));
                               }
                           else
                               {
                                   fill(color('#fcbf1e'));
                                    stroke(color('#fcbf1e'));
                               }
                       }
                    else
                       {
                        fill(color('#035aa6'));
                        stroke(color('#035aa6'));
                       }
                }
            rect(15+i*(bar_width+gap),height-arr[i],bar_width,arr[i],10);   
        }
    fill(255);
}

