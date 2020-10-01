var bs=0;

function bs_init()
{
    ii=0;
    jj=0;
}

function bs_step()   //what happens at each step
{
    if(ii<size+1)
        {
            if(arr[jj+1]<arr[jj])
            {
                let t=arr[jj+1];
                arr[jj+1]=arr[jj];
                arr[jj]=t;
            }
            
            jj++;
            
            if(jj==size-ii)
            {
                jj=0;
                ii++;
            }
            
        }
    if(ii==size)
        {
            ii++;
            jj--;
        }
}

function bs_show()
{
    stroke(255,0,0);
    strokeWeight(1);
    fill(100,50,255);
    for(let i=0;i<size;i++)
        {
            if(i==jj)
               {
               fill(color('#fcbf1e'));
               stroke(color('#fcbf1e'));
               }
            else if(i==(size-ii))
               {
               fill(color('#d92027'));
               stroke(color('#d92027'));
               }
            else
                {
                    fill(color('#035aa6'));
                    stroke(color('#035aa6'));
                }
                
            rect(15+i*(bar_width+gap),height-arr[i],bar_width,arr[i],10);   
        }
    
}
