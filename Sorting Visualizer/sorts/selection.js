var ii;
var jj;
var smallii; 
// variables common to selection sort and bubble sort

var ss=0;

function ss_init()
{
    ii=0;
    jj=0;
    smallii=0;
}

function ss_step() //what happens at each step
{
    if(ii<size)
        {
            if(arr[jj]<arr[smallii])
                {
                    smallii=jj;
                }
            
            if(jj==size)
                {
                    let temp=arr[smallii];
                    arr[smallii]=arr[ii];
                    arr[ii]=temp;
                    ii++;
                    jj=ii;
                    smallii=jj;
                }
            jj++;
        }
}

function ss_show()
{
    stroke(255,0,0);
    strokeWeight(1);
    fill(100,50,255);
    for(let i=0;i<size;i++)
        {
            if(i==jj)
            {
                stroke(color('#40bad5'));
                 fill(color('#40bad5'));   
            }
            else if(i==ii)
                {
                 stroke(color('#d92027'));
                 fill(color('#d92027'));   
                }
            else if(i==smallii)
                {
                stroke(color('#35d0ba'));
                fill(color('#35d0ba'));
                }
            else
            {
                stroke(color('#035aa6'));
                fill(color('#035aa6'));
            }
            rect(15+i*(bar_width+gap),height-arr[i],bar_width,arr[i],10);   
        }
         
}

