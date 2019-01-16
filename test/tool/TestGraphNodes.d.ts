/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { PredictionContext } from "../../src/atn/PredictionContext";
export declare class TestGraphNodes {
    private contextCache;
    rootIsWildcard(): boolean;
    fullCtx(): boolean;
    test_properties(): void;
    test_$_$(): void;
    test_$_$_fullctx(): void;
    test_x_$(): void;
    test_x_$_fullctx(): void;
    test_$_x(): void;
    test_$_x_fullctx(): void;
    test_a_a(): void;
    test_a$_ax(): void;
    test_a$_ax_fullctx(): void;
    test_ax$_a$(): void;
    test_aa$_a$_$_fullCtx(): void;
    test_ax$_a$_fullctx(): void;
    test_a_b(): void;
    test_ax_ax_same(): void;
    test_ax_ax(): void;
    test_abx_abx(): void;
    test_abx_acx(): void;
    test_ax_bx_same(): void;
    test_ax_bx(): void;
    test_ax_by(): void;
    test_a$_bx(): void;
    test_a$_bx_fullctx(): void;
    test_aex_bfx(): void;
    test_A$_A$_fullctx(): void;
    test_Aab_Ac(): void;
    test_Aa_Aa(): void;
    test_Aa_Abc(): void;
    test_Aac_Ab(): void;
    test_Aab_Aa(): void;
    test_Aab_Ab(): void;
    test_Aax_Aby(): void;
    test_Aax_Aay(): void;
    test_Aaxc_Aayd(): void;
    test_Aaubv_Acwdx(): void;
    test_Aaubv_Abvdx(): void;
    test_Aaubv_Abwdx(): void;
    test_Aaubv_Abvdu(): void;
    test_Aaubu_Acudu(): void;
    a(fullContext: boolean): PredictionContext;
    b(fullContext: boolean): PredictionContext;
    c(fullContext: boolean): PredictionContext;
    d(fullContext: boolean): PredictionContext;
    u(fullContext: boolean): PredictionContext;
    v(fullContext: boolean): PredictionContext;
    w(fullContext: boolean): PredictionContext;
    x(fullContext: boolean): PredictionContext;
    y(fullContext: boolean): PredictionContext;
    createSingleton(parent: PredictionContext, payload: number): PredictionContext;
    array(...nodes: PredictionContext[]): PredictionContext;
}
