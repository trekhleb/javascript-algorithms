

var ms=0;
var lptr,rptr,lend,rend;
var pma=[];
var sopma,wipma;
var tosort=[];
var sorted=[];
var tomerge=[];
var whatmsdo,startingmerge,phase2;

/*
This one was tricky. Mainly because, recursion can not be used as every step during the sort has to be shown on screen. 
Hence I used 3 stacks TOSORT, SORTED, TOMERGE. Pop the first range ie: 0->len-1 from tosort. 
push back 2nd half of range followed by 1st half of range. for example, pop 0-9, push 5-9, push 0,4. 
Lets call this the break step. After each break step, push 0,mid,end into TOMERGE. 
Initially, this step happens recursively until range contains only 1 element. If range contains only 1 number, push that to sorted array. 
Now, if the SORTED stack contains 2 or more ranges, and the TOMERGE stack contains these two ranges at the top of the stack,
then pop from merge, pop from sorted, and merge the range and replace the merged values in the original array.
*/

function ms_init()
{
    tosort=[];
    sorted=[];
    tomerge=[];
    tosort.push([0,size-1]);
    whatmsdo=0;
    startingmerge=0;
    lptr=-1;
    rptr=-1;
    lend=-1;
    rend=-1;
    pma=[];//partly merged array
    sopma=-1;//expected size of merged array
    wipma=-1;//where in partly merged array
    phase2=0;
}

function ms_step()   //what happens at each step
{
    if(whatmsdo==0)  
        {
            if(tomerge.length>0)
            {
                if(sorted.length>1)
                    {
                        let l=tomerge[tomerge.length-1][0];
                        let r=tomerge[tomerge.length-1][2];
                        let mid=tomerge[tomerge.length-1][1];
                        if(sorted[sorted.length-1][0]==mid && sorted[sorted.length-1][1]==r && sorted[sorted.length-2][0]==l && sorted[sorted.length-2][1]==mid-1)
                            {
                                sorted.pop();
                                sorted.pop();
                                whatmsdo=1;
                                startingmerge=1;
                            }
                    }
            }
            if(whatmsdo==0 && tosort.length>0)
                {
                    let curset=tosort.pop();
                    let l=curset[0];
                    let r=curset[1];
                    if(l!=r)
                        {
                            let mid=int((l+r)/2);
                            tosort.push([mid+1,r]);
                            tosort.push([l,mid]);
                            tomerge.push([l,mid+1,r]);
                        }
                    else
                        sorted.push([l,l]);
                }
        }
    else if(whatmsdo==1)
        {
            if(startingmerge==1) //before starting the merge of two ranges
                {
                    let merblo=tomerge.pop();
                    lptr=merblo[0];
                    rptr=merblo[1];
                    lend=merblo[1]-1;
                    rend=merblo[2];
                    startingmerge=0;
                    sopma=rend-lptr+1;
                }
            else   // in between merge
                {
                    if(pma.length==sopma)
                        {
                            for(let i=0;i<sopma;i++)
                                arr[i+rend-sopma+1]=pma[i];
                            pma=[];
                            startingmerge=1;
                            whatmsdo=0;
                            phase2=0;
                            sorted.push([rend-sopma+1,rend]);
                            wipma=-1;
                            if(sopma==size)
                                whatmsdo=2;
                        }
                    else
                        {
                            if(phase2==0 && (lptr>lend || rptr>rend))
                               {
                                    if(lptr>lend)
                                        {
                                            lptr=rptr;
                                            lend=rend;
                                        }
                                   phase2=1;
                               }
                            if(phase2==0)
                                {
                                    if(arr[lptr]<arr[rptr])
                                        pma[++wipma]=arr[lptr++];
                                    else
                                        pma[++wipma]=arr[rptr++];
                                }
                            else if(phase2==1)
                                {
                                    pma[++wipma]=arr[lptr++];
                                }
                        }
                    
                }
        }

}

function ms_show()
{
    stroke(255,0,0);
    strokeWeight(1);
    fill(100,50,255);
    for(let i=0;i<size;i++)
        {
            if(whatmsdo==1)
                {
                    if(i<=rend && i>=rend-sopma+1)
                        {
                            stroke(color('#d92027'));
                            fill(color('#d92027')); 
                        }
                    else
                        {
                            stroke(color('#035aa6'));
                            fill(color('#035aa6')); 
                        }
                }
            else if(whatmsdo==2)
                {
                    stroke(color('#d92027'));
                    fill(color('#d92027')); 
                }
            else
                {
                    stroke(color('#035aa6'));
                    fill(color('#035aa6'));   
                }
            rect(15+i*(bar_width+gap),height-arr[i],bar_width,arr[i],10);   
        }
    if(whatmsdo==1)
        {
            for(let i=0;i<pma.length;i++)
                {
                    stroke(color('#fcbf1e'));
                    fill(color('#fcbf1e'));
                    let tempi=i+rend-sopma+1;
                    rect(15+tempi*(bar_width+gap),height-pma[i],bar_width/2,pma[i],10);  
                }
        }
            
    
}
