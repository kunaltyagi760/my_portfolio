def height(node):
    if node == None:
        return 0
    return 1+max(height(node.left),height(node.right))
        
    def f(root):
        if root == None:
            return True
            
        lh = height(root.left)
        rh = height(root.right)
        
        if abs(lh-rh) <= 1 and f(root.left) and f(root.right):
            return True
            
        return False
        
    # optimize sol -1 
    
    def f1(root):
        if root == None:
            return [True,0]
            
        lhs = f1(root.left)
        rhs = f1(root.right)
        
        balance = lhs[0] and rhs[0] and abs(lhs[1]-rhs[1]) <= 1
        
        return [balance,1+max(rhs[1],lhs[1])]
        
    # optimize sol -2
    
    def f2(root):
        if root == None:
            return True
            
        lh = f2(root.left)
        if lh==0:
            return 0
            
        rh = f2(root.right)
        if rh==0:
            return 0
            
        if abs(rh-lh) > 1:
            return 0
        else:
            return 1+max(rh,lh)
        
    return f2(root) != 0
