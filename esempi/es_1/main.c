#include "stdio.h"
#include "stdlib.h"

int main(){
    int dim = 10;
    int *p = malloc(dim * sizeof(int));

    for(int i=0; i<dim; i++){
        p[i] = i;
    }

    for(int i=0; i<dim; i++){
        printf("%d\n", p[i]);
    }
    
    free(p);
    free(p);

    return 0;
}
