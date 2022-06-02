export class DocumentEditor {

    static addClassById(elementId: string, elementClass: string) {
        document.getElementById(elementId)?.classList.add(elementClass);
    }

    static removeClassById(elementId: string, elementClass: string) {
        document.getElementById(elementId)?.classList.remove(elementClass);
    }

}