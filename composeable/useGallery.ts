export function useGallery() {
  const BASE_LIST = ['0eERP9KzV6Y2PeFD.jpg', '0Nm45syrKAkO8sSE.jpg', '0OvWoUZcfjkMQuX4.jpg', '0PthMMaZ8JkJKbUI.jpg', '0sUp4BOLx12XsNkR.jpg', '0vaQTvzdaiL5IkFm.jpg', '1AWimPRWDnTHwbCM.jpg', '1ewlExCr80zWntov.jpg', '1EYbsuJpBubxQL9c.jpg', '1QmXlpb2y1nM1Eyw.jpg', '1ZBjdwDm4ymqGU7Q.jpg', '26Lys59TzcZrmqnF.jpg', '26Ybcfl7Hwj6GUR5.jpg', '2820sVqVWSUrII8i.jpg', '2htoQfbPw4WqhVBi.jpg', '2oFvzINOyXJMwQTo.jpg', '2QybWkJaDmUf4zKh.jpg', '2TsVYHWmKW0q9g2F.jpg', '2U5bTOkujMpMMipy.jpg', '2UL44GXsrXP05IJ6.jpg', '2Us7BIWFarXGgKoh.jpg', '3AbRPDBcAiEEkNdv.jpg', '3gMybQ7UE457kOUW.jpg', '3MnKSEhXEYnTIUil.jpg', '3Nwr9FlKF2tW1DiC.jpg', '3vnd74eID1nV0u4F.jpg', '40IabXWrNt3ei2uZ.jpg', '41bjxeRquXykCX7B.jpg', '41sLI3cZ4Hvn78kH.jpg', '4ATdzNlPVJ5CPHMY.jpg', '4e8r3phOmWqj6QaG.jpg', '4nIa9zxAPIgMTGPM.jpg', '4QCUmqHKu5rIduRz.jpg', '4QjKojA1LgaA4Azf.jpg', '5ehoCD5yI6UNkTzS.jpg', '5HvqnfqXOcqbWUvJ.jpg', '5K3HiUB8TQtIfK9V.jpg', '5mfNiffU9Zo5oPHe.jpg', '5ouQwVJsaW7mYxXo.jpg', '6IuyRlXKvlikhltv.jpg', '6kB8BQKw4TZm34Ta.jpg', '6kIHVP1Mf8vUA4ds.jpg', '6xhihFuUwOpVWelj.jpg', '70kMm6IEMVS9yr2F.jpg', '74X1WBFNXPYJJ2jk.jpg', '7B2lRO9Hpv43qZas.jpg', '7ygHgQL62w41aOZQ.jpg', '8B6yH86r2pvFmSHk.jpg', '8iEjukrj1vDqHWGh.jpg', '8NEFKMhX6Yq8xXQ2.jpg', '8RaeBUBktd5d7RXR.jpg', '8ywxiSbBDqCagdo0.jpg', '96DomnCqkr0VZNWc.jpg', '9BvuQyt2hpzTEQac.jpg', '9cvo26ExL0ZBn7vy.jpg', '9DMZEVZoEwqvlYM8.jpg', '9eS0AKC34yJMTcMA.jpg', '9evz12w2QyilODxj.jpg', '9icS9Fv3GJ0ffKls.jpg', 'a1LVHZnKi3ciC3mW.jpg', 'A2xbWwVqxd4NrPyG.jpg', 'A437OnSIJzSeaoqt.jpg', 'A49SGxTXCN1TyveJ.jpg', 'ab06YTA5thYM0Evc.jpg', 'aFwLA2caEexv95mY.jpg', 'aiGK744UEqaZ8xfp.jpg', 'aoWpyX8uYUrksNgv.jpg', 'aQqi433bkksxUptW.jpg', 'aW4lXRKP6UqbyvcU.jpg', 'B0Xi1WHU89JJXlpc.jpg', 'b7ABaC7pRbSeua6b.jpg', 'BBQUUp3ZqK1Z2Mh7.jpg', 'BbT5gXdMhhKhQWNm.jpg', 'bfgwjUUm2zF490oN.jpg', 'BHTyYBWuOmfgEuSV.jpg', 'BlIPKWxfgni6NSUk.jpg', 'bwgrmzngfUGpVbaA.jpg', 'bwSbIZDqW6Hc52pv.jpg', 'bzhXoa4vvyjXE9BV.jpg', 'c2iMUfSB13lt2qrz.jpg', 'cbdPDHoFn4FMZ7rS.jpg', 'cBfjNZepBGnm4NWN.jpg', 'cbUUtNieEksNeRaV.jpg', 'CglUuwluyldfC2DZ.jpg', 'CIS2BbeoMtO7rnIm.jpg', 'ckW4iwzEbWzhcZ4v.jpg', 'CKYvjq2GsQ5phoV6.jpg', 'cpzwIcT3GsYuie67.jpg', 'CXNcbgXPkS6t7iZB.jpg', 'D72pmsvUnXntlHhY.jpg', 'd7r0Jfhh5PYSoXyk.jpg', 'd8A2TUxSV0jgwluQ.jpg', 'DspyQEieOEyb8YbU.jpg', 'dY0wndlcDSkTn9ad.jpg', 'DYSSB2nAHphYuinH.jpg', 'DZSaBEkvIzt2eB4Q.jpg', 'E1w8xgEgGrlG0Wrs.jpg', 'E23FFr5WclxOMetU.jpg', 'e7x117ksTmApgjgi.jpg', 'e8j5h5DIU1ksPPI8.jpg', 'Eia21KMmeQIUhDTw.jpg', 'eIaX9KrDbl0xvLVW.jpg', 'ek8Oo0xrAdmyFS6M.jpg', 'EsvJopuQkIkFkSfP.jpg', 'EVnVcP3uh3CPr3Co.jpg', 'F0mju0B0JVwmZjAh.jpg', 'F4dPgreywqx2YOBV.jpg', 'F6xMdmCKBOPyccUH.jpg', 'fFpit7N0EA5qLgou.jpg', 'fgjEvCwjVfrfHuTy.jpg', 'FKXpW5hvvhJE3qp7.jpg', 'FLXSzXoJMKp132Hz.jpg', 'frM6y69nFhDstesO.jpg', 'fRWWrVbg6vGkGtig.jpg', 'fsrRPsi3lJwps1vJ.jpg', 'fYbbmrhpd2ZQrZlX.jpg', 'FYTWz9WawXlgZct4.jpg', 'G1FEJLnG7MkOIX9n.jpg', 'g6btUU058YD99fzV.jpg', 'gCh6iXy7p8bD7hxk.jpg', 'gI3AlC7jIxUpeP5k.jpg', 'gjt0njxFHrgZJxVC.jpg', 'Gq41cEKja0rjvjTk.jpg', 'GUmVJTkcj717pTuG.jpg', 'guvIRy05yKWLGr6p.jpg', 'Gv2yEyvoz0mHVqme.jpg', 'gVLzgBYHoJXmtSNZ.jpg', 'Gw8S1B2c7knupyEk.jpg', 'GXut2J1KW1WgNzlw.jpg', 'gxwf6q4PGdo8fIVB.jpg', 'h0ZoMLTMvyNw7MkQ.jpg', 'h1bzRs0waJuF3xsL.jpg', 'heFp17BwFzR65MrN.jpg', 'hK6HOYuWLUq2AwGD.jpg', 'HKWyq1BiwSWUfy6N.jpg', 'huIZGoJ7U1CQyT6d.jpg', 'HZRSzVrC5GmJiDcl.jpg', 'I6ZqTT2AVNyXCdu7.jpg', 'IgfVKN7myQw2LkoP.jpg', 'IOOdWcvQcKSVLyil.jpg', 'iP5GOwhpPgYrB5Vz.jpg', 'ITuEQpaY5bacKWa7.jpg', 'iupoIBY8MvHCMnrz.jpg', 'Iv61gt3oB5wdqwrF.jpg', 'iVLncELHFN4aKEij.jpg', 'IySjSHJrxCuQZ86M.jpg', 'J7t6DZgTBmy0C0Xh.jpg', 'JaMNSl3sgpBfqE6h.jpg', 'JEVhTTXtJTP3Q21j.jpg', 'JhEz7xZYF27h0x6m.jpg', 'jHil4C5nUiB0MVtV.jpg', 'JHW7aczn9VlmYmvz.jpg', 'JL1g6UviCMluXnkY.jpg', 'JQqolt9QWoaeaBYI.jpg', 'jtVSYgGKpvrqKV6H.jpg', 'jxNpTI6mDgPMrJCp.jpg', 'jY5UODksxgbyZqa4.jpg', 'jYPgPRSs8zkUNySM.jpg', 'jZBuXsqGaENc2CnB.jpg', 'k4HYt2v1euncCrNS.jpg', 'k9uLa9dsmaP5aj24.jpg', 'KD0SkPVxNxSNT6gY.jpg', 'KI9mvGQxwqtRsDP0.jpg', 'KMZsK9hNHHkzVgmt.jpg', 'kqAmiAK1XdOqEGlU.jpg', 'KrYlNuEkczTmKMWw.jpg', 'kwnY6aVR2mOFh8vl.jpg', 'l8pRbo3NglMFLzi7.jpg', 'l9IyqKuiYz0ItIwM.jpg', 'LA3NJlKfcjy0c3NO.jpg', 'LBmLiNyvL2dmxPyl.jpg', 'LH1IikUZ9AgLlS8Y.jpg', 'LIUKTsIOfbvipzBk.jpg', 'lMd7X7h5JhC05T88.jpg', 'lMGpkHaDDeZRCooU.jpg', 'lnEsHyjvVbx6iOWK.jpg', 'LOUpxJXB1Raf5GNk.jpg', 'lRwbHiHeEuDiOEZb.jpg', 'lSnKVxGm9k7OYAzY.jpg', 'LWJ6JNAGoVErdUcb.jpg', 'lYtxnNFNGTniJD8k.jpg', 'lZbMExSW0lPjKoLn.jpg', 'M5fiGIQZfUCx6qT8.jpg', 'mgKqNyj03LIv1seN.jpg', 'MMvlIsmYI7VqNuLG.jpg', 'MoMGB7UFiRsgVgGn.jpg', 'MP0alzUlAl7Hv49r.jpg', 'mP6wamaaBLUtWxie.jpg', 'mR49gPLRLfTIkiNm.jpg', 'Mwn618ozNHFxzx2V.jpg', 'MxTSOlg9GwUZEP85.jpg', 'MzlYLAHYMrhh3lze.jpg', 'MZu90OXdi002eBwC.jpg', 'N1QBkXqEdo6sSJVl.jpg', 'n4m76hGMCdxbz2WN.jpg', 'NALePmK1tXm0o6Bm.jpg', 'ncFacFFHxdit5uvk.jpg', 'ND6Ouh0d2v6NEi7a.jpg', 'nDd2j4iNXGambrUJ.jpg', 'nOwscIMswPHxuMNe.jpg', 'npDc44icikQCUUJh.jpg', 'nSKyFvQYPRpNrFha.jpg', 'O4ydizgGNXHEtPQf.jpg', 'O7v26vTzCbMOWt1K.jpg', 'OB3vk3QjOZoYyhRx.jpg', 'oBHvietGF3f4PJer.jpg', 'ODZiPLbNlhg4J9Ie.jpg', 'oEuhEhThPovieJa9.jpg', 'OHh9tEb7xC3006XQ.jpg', 'ooZpPOq9CWYfAoOk.jpg', 'OtqpivNkOOrk7C3u.jpg', 'OvdkDeSTaAB1vmBw.jpg', 'OW2xnyMUEnjrIiVs.jpg', 'oY7FHI6zfnJYdPI7.jpg', 'oYj5te7w2HuAHiK8.jpg', 'p3uYNljCwaWQ3pCi.jpg', 'P85ItQdth685e3n0.jpg', 'piKoHGO0aRxy3H7L.jpg', 'plM6ZlICQ6uuEzgB.jpg', 'PlOevg65dyoVGVOq.jpg', 'PSC3Pt7x88WKVkWb.jpg', 'Q9dE6k1gQX0sT3kA.jpg', 'q9YTiDn2UEEeqkAQ.jpg', 'qbCyuYmG0WbOfDJD.jpg', 'qErJjlrQen1hKfr7.jpg', 'qgVMkkcaIKKb8sTx.jpg', 'qI8ZNsFLwTQ0KShu.jpg', 'qmV99pB2f5WdSffH.jpg', 'qOt5YZwoIrskQiHW.jpg', 'qrGiphlUiRxQ4nG5.jpg', 'qteetjl7jNwAk4AU.jpg', 'qWK6AykUvBGHlbV9.jpg', 'QYn2tr5ic7oLAiX5.jpg', 'r5Di21wlKUUhsqkU.jpg', 'R70sLcUGGxcJwgQI.jpg', 'Ra8fht7jncwoLBu8.jpg', 'RAdxaIXEmlwyI9gN.jpg', 'rEwzSO5wHrwA2kcs.jpg', 'RGtEKoT9wcv7Npmw.jpg', 'RiYlCghmk51f4goO.jpg', 'Rj2t2b2rvvG9pPef.jpg', 'rKJMr0LIpDBGWj03.jpg', 'rMsI37bNHAl5vGrG.jpg', 'RNSegGXKSnjzg0Va.jpg', 'rr57Z5ZcQhiKFSOx.jpg', 'RulbxUOr9g2bom9r.jpg', 'rUNdRX2hpkF8RC6Z.jpg', 'rX1oMn2kodx3SpZQ.jpg', 's2R7BNVi4fQsJt5h.jpg', 'sBATXWAvcywq7CYG.jpg', 'SeBGhy1TGyd4LMBU.jpg', 'SeBNFPtyYPslsGuk.jpg', 'sHhcJ5N6xCsbiiE6.jpg', 'Si3vkyfOLaBlfKaE.jpg', 'SLeM3KBt1dVnrsBi.jpg', 'smVPIlrPbHFCjxnC.jpg', 'soBbBSiYwsyM7ish.jpg', 'SQyPeOzEFUtac2HX.jpg', 'Sz5WDkcO3MZXjpCR.jpg', 'T1jLifoheHHRHqkh.jpg', 'TA6r1F8IqNgEOrEJ.jpg', 'TcRHn2fakrhRb6aF.jpg', 'tfaq33gVkNcGdzIw.jpg', 'tlNbsK6KleWs5ziA.jpg', 'TnKDQVLaj6b9SgmV.jpg', 'TPO1JD3cPinpFpSy.jpg', 'TwMiIYIFjsSR18UJ.jpg', 'twueL09ISrrqCNg3.jpg', 'tz4VhQf8hmTShmhx.jpg', 'TzDDadGIQoHNOj0m.jpg', 'TzPtz5FFbYLPntry.jpg', 'U0DvLB9OfihYNlqG.jpg', 'U9GPfYS59CW7BujI.jpg', 'UdZHtAjDKNmrOXOM.jpg', 'Ufc39jWsWZnc4EKs.jpg', 'uH70UUaE5MRzIl2m.jpg', 'ukfAjBH8N1slJov7.jpg', 'Ul16iZncc25P6pYc.jpg', 'uleGBQtAfGnFhrna.jpg', 'UntnyOKh2Y5wsoH0.jpg', 'uPwd8faR8EihM3jn.jpg', 'URlWybjpR3cCWF5d.jpg', 'uWHIjqarue1XH50V.jpg', 'uxWCM23ovUb3eHEx.jpg', 'v2DuaT9ewedtUeTz.jpg', 'v2qtSZRNy3bRFwD5.jpg', 'VcyPQnZBTTPY67q8.jpg', 'VgaoG2dPxzR3O4so.jpg', 'VgqmiTkwnD36Asfo.jpg', 'vMUkUc6RH8nocAiQ.jpg', 'vN14lyzcoJ0MrOLl.jpg', 'vq0PN4tCSHeFT5Bj.jpg', 'vq0uc4fNGmBRVKXT.jpg', 'Vr7Z7xXubMj053je.jpg', 'VUBA62if3Fc7S8Na.jpg', 'vx8r79LjMtH3xdCS.jpg', 'w1cXv2aU7oLO1dGM.jpg', 'w5bUjujuXTTQcH2G.jpg', 'WanOZ6F4Z13hyuS6.jpg', 'wFHHyMkLdvlJ5W7W.jpg', 'wNNcEV23pB3J6z1a.jpg', 'WpCw2NO3CocEUaEH.jpg', 'wPVg4bj3EzaY7uHv.jpg', 'wPx0rPLjIgyCX8dK.jpg', 'WqnIdFtiwvvtKtCU.jpg', 'x2fkGKsD5ddHmBhz.jpg', 'x3DRbIItajreUUow.jpg', 'x7IQ0ibe4TqdSRSy.jpg', 'xBRP72iwkUvYZJuv.jpg', 'XCikzpO8aoqebgkk.jpg', 'XctIqDRt5ryz1pXT.jpg', 'XEi4sA2EWbdbilTl.jpg', 'XG80a4fqp8JZg79L.jpg', 'xGJTDnTZHwU6mNZk.jpg', 'XHdxaX77Jv5YbM1M.jpg', 'xIDC3H2Nz0vONzkm.jpg', 'xj8nCioKwB1jBAjg.jpg', 'xNTWHgYZQfVdnWmd.jpg', 'xoPfmuo3JzyYs70X.jpg', 'XrRxk4p7SzIisvTw.jpg', 'xVenLsTgRVXV3E9b.jpg', 'xZxHoI3rwB56cWRC.jpg', 'y2fVKi2PbEZvgOZO.jpg', 'Y3Qkp75MAlIyfJWH.jpg', 'y5ukRJHKqYzVX86Q.jpg', 'y696oK1gwxdRanzc.jpg', 'yBUCIGqSwmKGfwKU.jpg', 'YBXETJDWoZ47yaX1.jpg', 'ydFBhBpAhbR9FB6M.jpg', 'YfnErrEFcwMxitUL.jpg', 'YqRg4RJ8KQJWf8PP.jpg', 'Z0earvsrFR7QUEre.jpg', 'z2ogs7t8SoiqvsA1.jpg', 'Z2Sw49pTlnsp1YMB.jpg', 'Z54zVt7lmORr7OqK.jpg', 'z5HHGmNV1tYWDhVW.jpg', 'zGcQy65LG2UE26wa.jpg', 'zgkwtJGv27bYKUk3.jpg', 'ZHthazPtoLBUfM4d.jpg', 'ziBJDNLLVZPMHI29.jpg', 'Zl4frqOjzynPOug0.jpg', 'Zn4iVHCVyByq4DPY.jpg', 'Zon1I4KASP4K5gFJ.jpg', 'zpC2QRLKJgqZxvbD.jpg']
  const list = shallowRef<string[]>([])
  list.value = Array.from({ length: BASE_LIST.length }, (_, i) => `https://cdn.izhong.xyz/${BASE_LIST[i]}`)
  return {
    list
  }
}