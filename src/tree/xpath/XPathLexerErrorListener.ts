﻿/*
 * [The "BSD license"]
 * Copyright (c) 2013-2016 Terence Parr
 * Copyright (c) 2013-2016 Sam Harwell
 * Copyright (c) 2016 Burt Harris
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// CONVERSTION complete, Burt Harris 10/14/2016import { Collection } from "../../misc/Stubs";

import { ANTLRErrorListener } from "../../ANTLRErrorListener";
import { Override } from "../../Decorators";
import { Recognizer } from "../../misc/Stubs";
import { RecognitionException } from "../../RecognitionException";

export class XPathLexerErrorListener implements ANTLRErrorListener<number> {
	@Override
	syntaxError<T extends number>(recognizer: Recognizer<T,any>, offendingSymbol: T, 
							line: number, charPositionInLine: number, msg: string,
							e: RecognitionException): void
	{
	}
}
