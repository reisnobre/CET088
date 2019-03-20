// Eduardo Reis Nobre - 201610658
#include <stdio.h>
#include "cachelab.h"

int is_transpose(int M, int N, int A[N][M], int B[M][N]);

char transpose_submit_desc[] = "Transpose submission";
void transpose_submit(int M, int N, int A[N][M], int B[M][N])
{

    int i, j, k, l, tmp, diag;
    int remainder = M%8;
    int num_sets = M/8;
    int count = 0;
    int f,g,h;
    if (M == 32 && N == 32){ 

        for(l=0; l < 4; l++){     
            for(k=0; k < 4; k++){ 
                for (i = 8*l; i < 8*l+8; i++){ 
                    for (j = 8*k; j < 8*k+8; j++) { 
                        if(i!=j) 
                            B[j][i]=A[i][j];  
                        else{
                            tmp=A[j][j];  
                            diag = j;
                        }
                    }
                    if(k==l) B[diag][diag] = tmp;
                }
            }    
        }

    } 
    else{ 


        if (M==64 && N == 64){ 
            for(i=0; i<64; i+=8){
                for(j=0; j<64; j+=8){
                    for(k=0; k<4; k++){ 
                        l = A[i+k][j+0];
                        tmp = A[i+k][j+1];
                        diag = A[i+k][j+2];
                        remainder = A[i+k][j+3];
                        num_sets = A[i+k][j+4];
                        f = A[i+k][j+5];
                        g = A[i+k][j+6];
                        h = A[i+k][j+7];
                        B[j+0][i+k+0] = l;
                        B[j+0][i+k+4] = f;
                        B[j+1][i+k+0] = tmp;
                        B[j+1][i+k+4] = g;
                        B[j+2][i+k+0] = diag;
                        B[j+2][i+k+4] = h;
                        B[j+3][i+k+0] = remainder;
                        B[j+3][i+k+4] = num_sets;
                    }

                    l = A[i+4][j+4];
                    tmp = A[i+5][j+4];
                    diag = A[i+6][j+4];
                    remainder = A[i+7][j+4];
                    num_sets = A[i+4][j+3];
                    f = A[i+5][j+3];
                    g = A[i+6][j+3];
                    h = A[i+7][j+3];

                    B[j+4][i+0] = B[j+3][i+4];
                    B[j+4][i+4] = l;
                    B[j+3][i+4] = num_sets;
                    B[j+4][i+1] = B[j+3][i+5];
                    B[j+4][i+5] = tmp;
                    B[j+3][i+5] = f;
                    B[j+4][i+2] = B[j+3][i+6];
                    B[j+4][i+6] = diag;
                    B[j+3][i+6] = g;
                    B[j+4][i+3] = B[j+3][i+7];
                    B[j+4][i+7] = remainder;
                    B[j+3][i+7] = h;

                    for(k=0;k<3;k++){

                        l = A[i+4][j+5+k];
                        tmp = A[i+5][j+5+k];
                        diag = A[i+6][j+5+k];
                        remainder = A[i+7][j+5+k];
                        num_sets = A[i+4][j+k];
                        f = A[i+5][j+k];
                        g = A[i+6][j+k];
                        h = A[i+7][j+k];

                        B[j+5+k][i+0] = B[j+k][i+4];
                        B[j+5+k][i+4] = l;
                        B[j+k][i+4] = num_sets;
                        B[j+5+k][i+1] = B[j+k][i+5];
                        B[j+5+k][i+5] = tmp;
                        B[j+k][i+5] = f;
                        B[j+5+k][i+2] = B[j+k][i+6];
                        B[j+5+k][i+6] = diag;
                        B[j+k][i+6] = g;
                        B[j+5+k][i+3] = B[j+k][i+7];
                        B[j+5+k][i+7] = remainder;
                        B[j+k][i+7] = h;

                    }

                }
            }


        } 
        else{ 
            for(k=0; k < num_sets; k++){
                for (i = 0; i < N; i++) {
                    for (j = 0; j < 8; j++) {
                        B[j+count][i]=A[i][j+count];
                    }
                }
                count +=8;
            }
            for (i = 0; i < N; i++) { 
                for (j = 0; j < remainder; j++) {
                    tmp = A[i][j+count];
                    B[j+count][i] = tmp;
                }
            }
            count +=8;
        }
    }
} 

char trans_desc[] = "Simple row-wise scan transpose";
void trans(int M, int N, int A[N][M], int B[M][N])
{}

void registerFunctions()
{
    registerTransFunction(transpose_submit, transpose_submit_desc);

    registerTransFunction(trans, trans_desc);

}

int is_transpose(int M, int N, int A[N][M], int B[M][N])
{
    int i, j;

    for (i = 0; i < N; i++) {
        for (j = 0; j < M; ++j) {
            if (A[i][j] != B[j][i]) {
                return 0;
            }
        }
    }
    return 1;
}
