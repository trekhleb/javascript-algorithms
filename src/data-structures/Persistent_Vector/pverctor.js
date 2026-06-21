class Node{
    constructor(value,lastnode,rightnode,index,size)
    {
      this.value=value;
      this.left=lastnode;
      this.right=rightnode;
      this.index=index;
      this.size=size;
    }
}
class pair{
    constructor(node,size)
    {
      this.size=size;
      this.node=node;

    }
}
module.exports= class PersistentVector
{
    

    constructor()
    {
        this.size=0;
        this.record=-1;
        this.array=[];

        
    }
   addlast(value)
   {
    this.record+=1;
    // console.log(this.record);
    if(this.record==0)
    {
       let node=new Node(value,null,null,this.record,this.record+1);
    
      this.array.push(new pair(node,node.size));

    }
    else
    {
        let node=new Node(value,this.array[this.record-1].node,null,this.record,this.array[this.record-1].size+1);
        this.array.push(new pair(node,node.size));

    }


   }

   find(root,index)
   {
    // console.log(root);
      if(root.size-1>index)  return this.find(root.left,index);

     if(index>root.size-1) return this.find(root.right,index);

     return root.value;
   }
   getvalue(index,record)
   {
     
 let  root=this.array[record];
// console.log(root);
 return this.find(root.node,index);

      
   }
   updatAtindex(index,value)
   {
     this.record+=1;
     let node=new Node(value,this.array[index-1].node,this.array[index+1].node,this.record,this.array[index-1].size+1);

this.array.push(new pair(node,node.size));

   }


}


