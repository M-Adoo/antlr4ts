/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
export function escapeWhitespace(s, escapeSpaces) {
    return escapeSpaces ? s.replace(/ /, "\u00B7") : s
        .replace(/\t/, "\\t")
        .replace(/\n/, "\\n")
        .replace(/\r/, "\\r");
}
// Seriously: why isn't this built in to java? ugh!
export function join(collection, separator) {
    var buf = "";
    var first = true;
    try {
        for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
            var current = collection_1_1.value;
            if (first) {
                first = false;
            }
            else {
                buf += separator;
            }
            buf += current;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return buf;
    var e_1, _a;
}
export function equals(x, y) {
    if (x === y) {
        return true;
    }
    if (x === undefined || y === undefined) {
        return false;
    }
    return x.equals(y);
}
// export function numNonnull(data: any[]): number {
// 	let n: number =  0;
// 	if ( data == null ) return n;
// 	for (let o of data) {
// 		if ( o!=null ) n++;
// 	}
// 	return n;
// }
// export function removeAllElements<T>(data: Collection<T>, value: T): void {
// 	if ( data==null ) return;
// 	while ( data.contains(value) ) data.remove(value);
// }
// export function writeFile(@NotNull fileName: string, @NotNull content: string): void {
// 	writeFile(fileName, content, null);
// }
// export function writeFile(@NotNull fileName: string, @NotNull content: string, @Nullable encoding: string): void {
// 	let f: File =  new File(fileName);
// 	let fos: FileOutputStream =  new FileOutputStream(f);
// 	let osw: OutputStreamWriter;
// 	if (encoding != null) {
// 		osw = new OutputStreamWriter(fos, encoding);
// 	}
// 	else {
// 		osw = new OutputStreamWriter(fos);
// 	}
// 	try {
// 		osw.write(content);
// 	}
// 	finally {
// 		osw.close();
// 	}
// }
// @NotNull
// export function readFile(@NotNull fileName: string): char[] {
// 	return readFile(fileName, null);
// }
// @NotNull
// export function readFile(@NotNull fileName: string, @Nullable encoding: string): char[] {
// 	let f: File =  new File(fileName);
// 	let size: number =  (int)f.length();
// 	let isr: InputStreamReader;
// 	let fis: FileInputStream =  new FileInputStream(fileName);
// 	if ( encoding!=null ) {
// 		isr = new InputStreamReader(fis, encoding);
// 	}
// 	else {
// 		isr = new InputStreamReader(fis);
// 	}
// 	let data: char[] =  null;
// 	try {
// 		data = new char[size];
// 		let n: number =  isr.read(data);
// 		if (n < data.length) {
// 			data = Arrays.copyOf(data, n);
// 		}
// 	}
// 	finally {
// 		isr.close();
// 	}
// 	return data;
// }
// export function removeAll<T>(@NotNull predicate: List<T> list,@NotNull Predicate<? super T>): void {
// 	let j: number =  0;
// 	for (let i = 0; i < list.size; i++) {
// 		let item: T =  list.get(i);
// 		if (!predicate.eval(item)) {
// 			if (j != i) {
// 				list.set(j, item);
// 			}
// 			j++;
// 		}
// 	}
// 	if (j < list.size) {
// 		list.subList(j, list.size).clear();
// 	}
// }
// export function removeAll<T>(@NotNull predicate: Iterable<T> iterable,@NotNull Predicate<? super T>): void {
// 	if (iterable instanceof List<?>) {
// 		removeAll((List<T>)iterable, predicate);
// 		return;
// 	}
// 	for (Iterator<T> iterator = iterable.iterator(); iterator.hasNext(); ) {
// 		let item: T =  iterator.next();
// 		if (predicate.eval(item)) {
// 			iterator.remove();
// 		}
// 	}
// }
/** Convert array of strings to string&rarr;index map. Useful for
 *  converting rulenames to name&rarr;ruleindex map.
 */
export function toMap(keys) {
    var m = new Map();
    for (var i = 0; i < keys.length; i++) {
        m.set(keys[i], i);
    }
    return m;
}
export function toCharArray(str) {
    var result = new Uint16Array(str.length);
    for (var i = 0; i < str.length; i++) {
        result[i] = str.charCodeAt(i);
    }
    return result;
}
// export function toCharArray(data: IntegerList): char[] {
// 	if ( data==null ) return null;
// 	let cdata: char[] =  new char[data.size];
// 	for (let i=0; i<data.size; i++) {
// 		cdata[i] = (char)data.get(i);
// 	}
// 	return cdata;
// }
// /**
// 	* @since 4.5
// 	*/
// @NotNull
// export function toSet(@NotNull bits: BitSet): IntervalSet {
// 	let s: IntervalSet =  new IntervalSet();
// 	let i: number =  bits.nextSetBit(0);
// 	while ( i >= 0 ) {
// 		s.add(i);
// 		i = bits.nextSetBit(i+1);
// 	}
// 	return s;
// }
//# sourceMappingURL=Utils.js.map