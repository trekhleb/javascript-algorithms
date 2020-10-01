var qs=0;
var qs_stack=[];
var whatqsdo=0;
var fast,slow;
var sorted_by_qs=[];

function qs_init()
{
    qs_stack=[];
    qs_stack.push([0,size-1]);
    whatqsdo=0;
    ii=0;
    jj=0;
    fast=0;
    slow=0;
}

function qs_step()  //what happens at each step
{
    if(whatqsdo==0)  //pop the next range to be sorted and set the pivot to the first element in the range
        {
            if(qs_stack.length>0)
                {
                    let p=qs_stack.pop();
                    ii=p[0];
                    jj=p[1];
                    fast=ii;
                    slow=ii;
                    whatqsdo=1;
                }
            else
                {
                    ii=-1;
                    jj=-1;
                    fast=-1;
                    slow=-1;
                }
        }
    if(whatqsdo==1)  //partitioning the array into <pivot and >pivot
        {
            if(arr[fast]<arr[ii])
                {
                    slow++;
                    let temp=arr[slow];
                    arr[slow]=arr[fast];
                    arr[fast]=temp;
                }
            fast++;
            if(fast==jj+1)
                {
                    let temp=arr[ii];
                    arr[ii]=arr[slow];
                    arr[slow]=temp;
                    sorted_by_qs.push(slow);
                    whatqsdo=0;
                    if(slow+1<=jj)
                        qs_stack.push([slow+1,jj]); 
                    /* once pivot is in place pop right and left ranges to stack for sorting */
                    if(ii<=slow-1)
                        qs_stack.push([ii,slow-1]);
                }
        }
}

function qs_show()
{
    stroke(255,0,0);
    strokeWeight(1);
    fill(100,50,255);
    for(let i=0;i<size;i++)
        {
            if(sorted_by_qs.includes(i))
               {
               fill(color('#fcbf1e'));
               stroke(color('#fcbf1e'));
               }
            else if(i==jj)
               {
               fill(color('#d92027'));
               stroke(color('#d92027'));
               }
            else if(i==ii)
               {
               fill(color('#d92027'));
               stroke(color('#d92027'));
               }
            else if(i==fast)
               {
               fill(color('#40bad5'));
               stroke(color('#40bad5'));
               }
            else
                {
                    fill(color('#035aa6'));
                    stroke(color('#035aa6'));
                }
                
            rect(15+i*(bar_width+gap),height-arr[i],bar_width,arr[i],10);   
        }
    stroke(255);
    strokeWeight(0.3); 
    line(0,height-arr[ii],width,height-arr[ii]);
    if(slow>=0)
    line(18+slow*(bar_width+gap)+bar_width,0,18+slow*(bar_width+gap)+bar_width,height);
}
